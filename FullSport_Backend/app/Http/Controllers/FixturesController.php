<?php

namespace App\Http\Controllers;

use App\Models\Fixtures;
use FFI;
use Illuminate\Http\Request;

class FixturesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getGames()
    {
        //
        $fixtures=Fixtures::all();
        return response()->json([
            'status'=> 'success',
            'fixtures'=> $fixtures,
        ]);
    }

    public function getGamesByDate($date_event)
    {
        $fixtures = Fixtures::find($date_event);

        return $fixtures;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
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
    //     dd($result);
    //     $fixtures = new Fixtures();
    //     $fixtures->name_home = $result["response"][6]['teams']['away']['name'];
    //     $fixtures->name_away = $result["response"][6]['teams']['away']['name'];
    //     $fixtures->logo_home =$result["response"][6]['teams']['home']['logo'];
    //     $fixtures->logo_away =$result["response"][6]['teams']['away']['logo'];
    //     $fixtures->winner =$result["response"][6]['teams']['away']['winner'];
    //     $fixtures->status =$result["response"][6]['fixture']['status']['long'];
    //     $fixtures->duration =$result["response"][6]['fixture']['status']['elapsed'];
    //     $fixtures->save();
     }

    /**
     * Store a newly created resource in storage.
     */
    public function pushGames(Request $request)
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://api.football-data.org/v4/competitions/PD/matches',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_HTTPHEADER => array(
            //"X-RapidAPI-Host: heisenbug-la-liga-live-scores-v1.p.rapidapi.com",
		    "X-Auth-Token: bfc8d231996a4c8f8a9ca3a9350d404b",
        ),
        ));

        $response = curl_exec($curl);


        curl_close($curl);
        $result = json_decode($response, true);

        //$result = $result['matches'];
        //var_dump($result);

        // $all = $result["results"];
        for ($i=0; $i < 380; $i++){
        $fixtures = new Fixtures();
        $fixtures->name_league = $result['competition']['name'];
        $fixtures->logo_league = $result['competition']['emblem'];
        $fixtures->round = $result['matches'][$i]['matchday'];
        $fixtures->date_event = $result['matches'][$i]['utcDate'];
        $fixtures->name_home = $result['matches'][$i]['homeTeam']['name'];
        $fixtures->name_away = $result['matches'][$i]['awayTeam']['name'];;
        $fixtures->logo_home =$result['matches'][$i]['homeTeam']['crest'];
        $fixtures->logo_away =$result['matches'][$i]['awayTeam']['crest'];
        $fixtures->goals_home =$result['matches'][$i]['score']['fullTime']['home'];
        $fixtures->goals_away =$result['matches'][$i]['score']['fullTime']['away'];
        $fixtures->status =$result['matches'][$i]['status'];
        $fixtures->save();
        }
        // $fixtures = new Fixtures();
        // $fixtures->name_league = $result["response"][6]['league']['name'];
        // $fixtures->logo_league = $result["response"][6]['league']['logo'];

        // $fixtures->name_home = $result["response"][6]['teams']['home']['name'];
        // $fixtures->name_away = $result["response"][6]['teams']['away']['name'];
        // $fixtures->logo_home =$result["response"][6]['teams']['home']['logo'];
        // $fixtures->logo_away =$result["response"][6]['teams']['away']['logo'];
        // $fixtures->goals_home =$result["response"][6]['goals']['home'];
        // $fixtures->goals_away =$result["response"][6]['goals']['away'];
        // $fixtures->status =$result["response"][6]['fixture']['status']['long'];
        // $fixtures->duration =$result["response"][6]['fixture']['status']['elapsed'];
        // $fixtures->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Fixtures $fixtures)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Fixtures $fixtures)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Fixtures $fixtures)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Fixtures $fixtures)
    {
        //
    }
    // public function importArrayFile()
    // {
    //     // $curl = curl_init();

    //     // curl_setopt_array($curl, array(
    //     // CURLOPT_URL => 'https://v3.football.api-sports.io/fixtures?league=140&season=2022',
    //     // CURLOPT_RETURNTRANSFER => true,
    //     // CURLOPT_ENCODING => '',
    //     // CURLOPT_MAXREDIRS => 10,
    //     // CURLOPT_TIMEOUT => 0,
    //     // CURLOPT_FOLLOWLOCATION => true,
    //     // CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    //     // CURLOPT_CUSTOMREQUEST => 'GET',
    //     // CURLOPT_HTTPHEADER => array(
    //     //     'x-rapidapi-key: 921b1cce7a8768cad03ee068118ab9fa',
    //     //     'x-rapidapi-host: v3.football.api-sports.io'
    //     // ),
    //     // ));

    //     // $response = curl_exec($curl);


    //     // curl_close($curl);
    //     // $result = json_decode($response, true);
    //     // $array = $result;

    // //foreach($array as $data)
    // //{
    //     $model = new Fixtures();
    //     $model->name_home = '1';
    //     $model->name_away = '1';
    //     $model->logo_home = '1';
    //     $model->logo_away = '1';
    //     $model->winner = '1';
    //     $model->status = '1';
    //     $model->duration = '1';
    //     $model->save();
    //     $colleague = Fixtures::create([
    //         'nombre' => "1",
    //         'apellido' => "1",
    //         'email' => "1",
    //         'telefono' => "1",
    //     ]);
    // //}

    // return response()->json(['success' => true]);
    // }

    // public function importJsonFile(Request $request)
    // {
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
    //     $file = $request->file($response);
    //     $data = json_decode(file_get_contents($file), true);
    //     // foreach ($data as $row) {
    //     //     $model = new ModelName;
    //     //     $model->id = $row['id'];
    //     //     $model->name = $row['name'];
    //     //     $model->age = $row['age'];
    //     //     $model->save();
    //     // }

    //     $model = new Fixtures;

    //     $model->name = $data["response"][6]['teams']['away']['name'];


    //     return response()->json(['success' => true]);
    // }

}
