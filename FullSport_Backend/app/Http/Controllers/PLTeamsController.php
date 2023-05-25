<?php

namespace App\Http\Controllers;

use App\Models\PLTeams;
use Illuminate\Http\Request;

class PLTeamsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getTeams()
    {
        //
        $teams=PLTeams::all();
        return response()->json([
            'status'=> 'success',
            'teams'=> $teams,
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
    public function postTeams(Request $request)
    {
        //
        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://v3.football.api-sports.io/teams?league=39&season=2022',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_HTTPHEADER => array(
            'x-rapidapi-host: v3.football.api-sports.io', 
	        'x-rapidapi-key: a2d7a70958e31bc64a8a15084450a060'
        ),
        ));

        $response = curl_exec($curl);


        curl_close($curl);
        $result = json_decode($response, true);

        //$result = $result['matches'];
        //var_dump($result);

        // $all = $result["results"];
        for ($i=0; $i < 20; $i++){
        $teams = new PLTeams();
        $teams->name_team = $result['response'][$i]['team']['name'];
        $teams->team_logo = $result['response'][$i]['team']['logo'];
        $teams->team_founded = $result['response'][$i]['team']['founded'];
        $teams->venue_name = $result['response'][$i]['venue']['name'];
        $teams->venue_capacity = $result['response'][$i]['venue']['capacity'];
        $teams->save();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(PLTeams $pLTeams)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PLTeams $pLTeams)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PLTeams $pLTeams)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PLTeams $pLTeams)
    {
        //
    }
}
