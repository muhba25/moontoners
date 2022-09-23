<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=6hB3S9bIaco',
                'thumbnail' => 'https://occ.a.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY1ykl4MOi7_v8_OVyILpQG-b5oKHVeqFvGO7eCN-g8SYdxBDJwoLaNt5gHB2s-oQbzfNN9EGX6iLDXLicKvqDa3QIR9kIUFujun.jpg',
                'rating' => 4.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Crime',
                'video_url' => 'https://www.youtube.com/watch?v=sY1S34973zA',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMTIwNjQ5MjQ5M15BMl5BanBnXkFtZTYwNjQ5NjQyMzE@._V1_.jpg',  
                'rating' => 4.2,
                'is_featured' => 0,
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMTIwNjQ5MjQ5M15BMl5BanBnXkFtZTYwNjQ5NjQyMzE@._V1_.jpg',
                'rating' => 4.0,
                'is_featured' => 0,
            ]
            ];

        Movie::insert($movies);
    }
}
