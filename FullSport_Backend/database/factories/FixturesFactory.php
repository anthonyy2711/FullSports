<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class FixtureFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
    //     $curl = curl_init();

    //     curl_setopt_array($curl, array(
    //     CURLOPT_URL => 'https://v3.football.api-sports.io/fixtures?league=140&season=2022',
    //     CURLOPT_RETURNTRANSFER => true,
    //     CURLOPT_ENCODING => '',
    //     CURLOPT_MAXREDIRS => 10,
    //     CURLOPT_TIMEOUT => 0,
    //     CURLOPT_FOLLOWLOCATION => true,
    //     CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    //     CURLOPT_CUSTOMREQUEST => 'GET',
    //     CURLOPT_HTTPHEADER => array(
    //         'x-rapidapi-key: 921b1cce7a8768cad03ee068118ab9fa',
    //         'x-rapidapi-host: v3.football.api-sports.io'
    //     ),
    //     ));

    //     $response = curl_exec($curl);


    //     curl_close($curl);
    //     $result = json_decode($response, true);

    //     // $result = $result["response"][6]['teams']['away']['name'];
    //     // var_dump($result) ;
    //     return [
    //         //
    //         'name_league' =>
    //         'logo_league' =>
    //         'name_home' => $result = $result["response"][6]['teams']['home']['name'],
    //         'name_away' => $result = $result["response"][6]['teams']['away']['name'],
    //         'logo_home' => $result = $result["response"][6]['teams']['home']['logo'],
    //         'logo_away' => $result = $result["response"][6]['teams']['away']['logo'],
    //         'goals_home' => $result = $result["response"][6]['teams']['away']['winner'],
    //         'goals_away' =>
    //         'duration' =>
    //         'status' =>

    //     ];
    // }
}
}
