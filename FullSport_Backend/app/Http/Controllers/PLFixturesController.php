<?php

namespace App\Http\Controllers;

use App\Models\Fixtures;
use App\Models\PLFixtures;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class PLFixturesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['getGames']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function getGames()
    {
        //Function to get all games of the table Fixtures and get the Current match of the league.
        $fixtures=PLFixtures::all();
        $currentMatchday=PLFixtures::select('currentMatchday')
        ->where('id', 1)
        ->get();

        //Return a json with the status, the fixtures and the current matchday. 
        return response()->json([
            'status'=> 'success',
            'PLfixtures'=> $fixtures,
            'currentMatchday'=> $currentMatchday
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function pushgames(Request $request)
    {
        //this function is to post the all games of the season of the league.
        $curl = curl_init();
        //here we do a petition to  the external API with the url and Token.
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'http://api.football-data.org/v4/competitions/PL/matches',
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

            //here we do a for to have all the matches of the season and we save all this data in our database.
            for ($i=0; $i < 380; $i++){
            $fixtures = new PLFixtures();
            $fixtures->name_league = $result['competition']['name'];
            $fixtures->logo_league = $result['competition']['emblem'];
            $fixtures->round = $result['matches'][$i]['matchday'];
            $fixtures->currentmatchday = $result['matches'][$i]['season']['currentMatchday'];
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

    }

    /**
     * Display the specified resource.
     */
    public function show(PLFixtures $pLFixtures)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PLFixtures $pLFixtures)
    {
        //
    }

/*     public function Fixture(PLFixtures $round)
    {
        //
        $fixtures = PLFixtures::where('round', $round);
        return $fixtures->toJson();
    } */


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PLFixtures $pLFixtures)
    {
        //
        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://api.football-data.org/v4/competitions/PL/matches',
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

        // to update we first truncate the table 
        if (Schema::hasTable('pl_fixtures')) {
            DB::table('pl_fixtures')->truncate();
        }

        //when the data is empty we do the same here than pushGames() and save again in the database.
        for ($i=0; $i < 380; $i++){
            $fixtures = new PLFixtures();
            $fixtures->name_league = $result['competition']['name'];
            $fixtures->logo_league = $result['competition']['emblem'];
            $fixtures->round = $result['matches'][$i]['matchday'];
            $fixtures->currentMatchday = $result['matches'][$i]['season']['currentMatchday'];
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
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PLFixtures $pLFixtures)
    {
        //
    }
}
