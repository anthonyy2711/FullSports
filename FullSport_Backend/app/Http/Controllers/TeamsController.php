<?php

namespace App\Http\Controllers;

use App\Models\teams;
use Illuminate\Http\Request;

class TeamsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getTeams()
    {
        //

        $teams=teams::all();
        return response()->json([
            'status'=> 'success',
            'teams'=> $teams,
        ]);
    }

    public function playersByTeam($id)
    {
        $teams = teams::findOrFail($id);
        $players = $teams->players;
        return response()->json(['players' => $players]);
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
    public function postTeams(Request $request)
    {
        //
        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://api.football-data.org/v4/competitions/PD/teams',
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
        for ($i=0; $i < 20; $i++){
        $teams = new teams();
        $teams->name_team = $result['teams'][$i]['name'];
        $teams->team_logo = $result['teams'][$i]['crest'];
        $teams->team_founded = $result['teams'][$i]['founded'];
        $teams->team_venue = $result['teams'][$i]['venue'];
        $teams->team_coach = $result['teams'][$i]['coach']['name'];
        $teams->player_name = $result['teams'][$i]['squad'][$i]['name'];
        $teams->player_position = $result['teams'][$i]['squad'][$i]['position'];
        $teams->player_date = $result['teams'][$i]['squad'][$i]['dateOfBirth'];
        $teams->player_nationality = $result['teams'][$i]['squad'][$i]['nationality'];
        $teams->save();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(teams $teams)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(teams $teams)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, teams $teams)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(teams $teams)
    {
        //
    }
}
