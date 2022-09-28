import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated/Index";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Inertia } from "@inertiajs/inertia";

export default function SubscriptionPlan({ auth, subscriptionPlan, env }) {
    const SelectSubsciption = (id) => {
        Inertia.post(
            route("user.dashboard.subscriptionPlan.userSubscribe", {
                subscriptionPlan: id,
            }),
            {},
            {
                only: ["userSubscription"],
                onSuccess: ({ props }) => {
                    console.log({props});
                    onSnapMidtrans(props.userSubscription);
                },
            }
        );
    };

    const onSnapMidtrans = (userSubscription) => {
        snap.pay(userSubscription.snap_token, {
            onSuccess: function (result) {
                Inertia.visit(route('user.dashboard.index'));
            },
            onPending: function (result) {
                console.log({ result });
            },
            onError: function (result) {
                console.log({ result });
            },
        });
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Subscription Plan">
                <script
                    src="https://app.sandbox.midtrans.com/snap/snap.js"
                    data-client-key={env.MIDTRANS_CLIENT_KEY}
                ></script>
            </Head>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/*  Pricing Card  */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {subscriptionPlan.map((plan) => (
                        <SubscriptionCard
                            name={plan.name}
                            price={plan.price}
                            durationInMonth={plan.active_period_in_months}
                            features={JSON.parse(plan.features)}
                            // isPremium={(plan.name === "Premium") ? true : false} // OR
                            isPremium={plan.name === "Premium"}
                            key={plan.id}
                            onSelectSubcription={() =>
                                SelectSubsciption(plan.id)
                            }
                        />
                    ))}
                </div>
                {/*  /Pricing Card  */}
            </div>
        </Authenticated>
    );
}
