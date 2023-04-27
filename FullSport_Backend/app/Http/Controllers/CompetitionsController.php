<?php

namespace App\Http\Controllers;

use App\Models\Competitions;
use Illuminate\Http\Request;

class CompetitionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCompetitions()
    {
        //
        $competitions=Competitions::all();
        return response()->json([
            'status'=> 'success',
            'competitions'=> $competitions,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function pushCompetitions(Request $request)
    {
        //
        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://api.football-data.org/v4/competitions/PD/standings',
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
        $competitions = new Competitions();
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
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
