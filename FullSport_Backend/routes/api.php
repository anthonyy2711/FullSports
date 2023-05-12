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

/* Route::middleware(['role:admin'])->group(function () {
    Route::controller(FixturesController::class)-> group(function(){

        Route::get('games','getGames');


Route::post('games','pushGames');
Route::get('games','getGamesByDate');

    });
}); */

Route::controller(FixturesController::class)-> group(function(){

    Route::get('games','getGames');
    Route::post('games','pushGames');

    Route::put('games','update');
    //Route::get('games','getGamesByDate');

});

Route::controller(CompetitionsController::class)-> group(function(){

Route::get('standings','getCompetitions');

Route::post('standings','pushCompetitions');

Route::put('standings','update');

});



//Route::apiResource('news',NewsController::class);
Route::controller(NewsController::class)-> group(function(){

    Route::get('news','getNews');
    Route::get('news/show/{id}','show');

});

Route::apiResource('posts',PostController::class);

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});

//return File::get(public_path() . '/to new folder name/index.html');

/* Route::get('image/{filename}',function(){
    $path = public_path().'/uploads/images/'.$fileName;
    return Response::download($path);
}); */

Route::get('image/{path}', [PostController::class, 'getImage'])->where('path', '.*');
