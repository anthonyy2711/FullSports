<?php

use App\Http\Controllers\CompetitionsController;
use App\Http\Controllers\FixturesController;
use App\Http\Controllers\NewsController;
use App\Models\Fixtures;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\PostController;

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

// Route::controller(FixturesController::class)-> group(function(){

// Route::get('games','getGames');


// Route::post('games','pushGames');

// });

Route::middleware(['role:admin'])->group(function () {
    Route::controller(FixturesController::class)-> group(function(){

        Route::get('games','getGames');


Route::post('games','pushGames');

    });
});


Route::controller(CompetitionsController::class)-> group(function(){

Route::get('standings','getCompetitions');

Route::post('standings','pushCompetitions');

});



//Route::apiResource('news',NewsController::class);
Route::controller(NewsController::class)-> group(function(){

    Route::get('news','getNews');

});

Route::apiResource('posts',PostController::class);

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});
