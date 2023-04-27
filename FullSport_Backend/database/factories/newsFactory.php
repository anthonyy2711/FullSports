<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        
        //Authors
        $author_name = ['Pau', 'Anthony', 'Ruyou'];//Define authors name
        $rand_name_position = array_rand($author_name);//Get random position(int)
        $rand_author = $author_name[$rand_name_position];//Get author name value(string)

        $faker = Faker::create('es_ES');//Change faker generated text
        return [

            'new_img'         => $this->faker->image('public/img',640,480),
            'new_title'       => $faker->realText(20),
            'new_description' => $faker->realText(50),
            'author_img'      => $this->faker->image('public/img',300,300),
            'author_name'     => $rand_author,
            'new_date'        => $this->faker->dateTimeBetween('-30 days', '+30 days'),

        ];
    }
}
