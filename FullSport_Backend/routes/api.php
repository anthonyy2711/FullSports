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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResource('fixtures', FixturesController::class);

Route::apiResource('/import-array-file', FixturesController::class);
Route::apiResource('/import-json-file', FixturesController::class);



Route::post('/api/data', function (Request $request) {
    $data = $request->all();
    dd($data);
    foreach ($data as $item) {
        Fixtures::create([
            'column1' => $item['field1'],
            'column2' => $item['field2'],
            // add more columns as necessary
        ]);
    }

    return response()->json(['status' => 'success']);
});
