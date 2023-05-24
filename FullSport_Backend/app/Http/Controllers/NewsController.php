<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\news;

class NewsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['getNews', 'show']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function getNews()
    {
        //
        $news=news::orderBy('new_date', 'desc')->get();//order news by date
        return response()->json([
            'status'=> 'success',
            'news'=> $news,
        ]);
    }

    /**
     *
     */

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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $news = news::find($id);
        return response()->json([
            'status'=> 'success',
            'news'=> $news,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
