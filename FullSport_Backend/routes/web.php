<?php

//use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
/* 
Route::get('/', function () {
    return view('welcome');
});

Route::get('getIndicators', function()
{
    $curl = curl_init();

    curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://v3.football.api-sports.io/fixtures?league=140&season=2022',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_HTTPHEADER => array(
        'x-rapidapi-key: 921b1cce7a8768cad03ee068118ab9fa',
        'x-rapidapi-host: v3.football.api-sports.io'
    ),
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    $result = json_decode($response, true);

    // echo $result["response"];
    $result = json_decode($response, true);

    $result = $result["response"][6]['teams']['away']['name'];
    var_dump($result) ;
});
 */