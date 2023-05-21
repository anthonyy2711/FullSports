<?php

namespace App\Http\Controllers;

use App\Models\PLStandings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class PLStandingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getCompetitions()
    {
        //
        $competitions=PLStandings::all();
        return response()->json([
            'status'=> 'success',
            'PLStandings'=> $competitions,
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
    public function pushCompetitions(Request $request)
    {
        //
        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://api.football-data.org/v4/competitions/PL/standings',
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
        //dd($result);

        // $all = $result["results"];
        for ($i=0; $i < 20; $i++){
        $competitions = new PLStandings();
        $competitions->name_league = $result['competition']['name'];
        $competitions->logo_league = $result['competition']['emblem'];
        $competitions->position = $result['standings'][0]['table'][$i]['position'];
        $competitions->name_team = $result['standings'][0]['table'][$i]['team']['name'];
        $competitions->team_logo = $result['standings'][0]['table'][$i]['team']['crest'];
        $competitions->played_games = $result['standings'][0]['table'][$i]['playedGames'];
        $competitions->games_win =$result['standings'][0]['table'][$i]['won'];
        $competitions->games_draw =$result['standings'][0]['table'][$i]['draw'];
        $competitions->games_lost =$result['standings'][0]['table'][$i]['lost'];
        $competitions->points =$result['standings'][0]['table'][$i]['points'];
        $competitions->save();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(PLStandings $pLStandings)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PLStandings $pLStandings)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PLStandings $pLStandings)
    {
        //
        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://api.football-data.org/v4/competitions/PL/standings',
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
        //dd($result);

        //$competitions = Competitions::findOrFail($id);
        if (Schema::hasTable('pl_standings')) {
            DB::table('pl_standings')->truncate();
        }

        // $all = $result["results"];
        for ($i=0; $i < 20; $i++){
        $competitions = new PLStandings();
        $competitions->name_league = $result['competition']['name'];
        $competitions->logo_league = $result['competition']['emblem'];
        $competitions->position = $result['standings'][0]['table'][$i]['position'];
        $competitions->name_team = $result['standings'][0]['table'][$i]['team']['name'];
        $competitions->team_logo = $result['standings'][0]['table'][$i]['team']['crest'];
        $competitions->played_games = $result['standings'][0]['table'][$i]['playedGames'];
        $competitions->games_win =$result['standings'][0]['table'][$i]['won'];
        $competitions->games_draw =$result['standings'][0]['table'][$i]['draw'];
        $competitions->games_lost =$result['standings'][0]['table'][$i]['lost'];
        $competitions->points =$result['standings'][0]['table'][$i]['points'];
        $competitions->save();
        }
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PLStandings $pLStandings)
    {
        //
    }
}
