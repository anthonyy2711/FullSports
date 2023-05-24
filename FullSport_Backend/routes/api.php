<?php

use App\Http\Controllers\CompetitionsController;
use App\Http\Controllers\FixturesController;
use App\Http\Controllers\NewsController;
use App\Models\Fixtures;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\PLFixturesController;
use App\Http\Controllers\PLStandingsController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TeamsController;
use App\Http\Controllers\UpdateController;
use App\Models\PLFixtures;
use App\Models\User;
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

Route::controller(FixturesController::class)->group(function () {

    Route::get('games', 'getGames');
    Route::post('games', 'pushGames');

    Route::put('games', 'update');
    //Route::get('games','getGamesByDate');

});

Route::controller(PLFixturesController::class)->group(function () {

    Route::get('PLgames', 'getGames');
    Route::post('PLgames', 'pushGames');

    Route::put('PLgames', 'update');
    //Route::get('games','getGamesByDate');

    // Route::get('PLgames','Fixture');

});

Route::controller(TeamsController::class)-> group(function(){

    Route::get('teams','getTeams');
    Route::post('teams','postTeams');

    Route::get('teams/{id}/players', 'TeamController@playersByTeam');

    //Route::put('teams','update');
    //Route::get('games','getGamesByDate');

    // Route::get('PLgames','Fixture');

});


Route::controller(CompetitionsController::class)->group(function () {

    Route::get('standings', 'getCompetitions');

    Route::post('standings', 'pushCompetitions');

    Route::put('standings', 'update');
});

Route::controller(PLStandingsController::class)->group(function () {

    Route::get('PLStandings', 'getCompetitions');

    Route::post('PLStandings', 'pushCompetitions');

    Route::put('PLStandings', 'update');
});



/* Route::apiResource('news',NewsController::class); */
// Route::controller(NewsController::class)-> group(function(){

//     Route::get('news','getNews');
//     Route::get('news/show/{id}','show');
//     Route::post('news', 'store');
//     Route::put('news', 'update');
// });
//News
Route::get('news', [NewsController::class, 'getNews']);
Route::get('news/show/{id}', [NewsController::class, 'show']);
Route::post('news', [NewsController::class, 'store']);
Route::post('news/update', [NewsController::class, 'update']);
Route::delete('news/{id}', [NewsController::class, 'destroy']);


Route::apiResource('posts', PostController::class);

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});
Route::apiResource('users', UserController::class);


Route::post('updateProfile', [UpdateController::class, 'updateProfile']);



// Route::middleware(['role:journalist'])->group(function () {

// });
// Route::middleware(['role:admin'])->group(function () {

// });
Route::get('image/{path}', [PostController::class, 'getImage'])->where('path', '.*');
