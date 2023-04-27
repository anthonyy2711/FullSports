<?php

use App\Http\Controllers\FixturesController;
use App\Models\Fixtures;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Route::apiResource('fixtures',FixturesController::class);
Route::controller(FixturesController::class)-> group(function(){

Route::get('games','getGames');

Route::post('games','pushGames');

});
