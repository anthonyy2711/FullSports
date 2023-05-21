<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\news;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getNews()
    {
        //
        $news=news::orderBy('created_at', 'desc')->get();//order news by date
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
        $request->validate([
            'new_img'           =>'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'new_title'         =>'required',
            'new_description'   =>'required',

        ]);
       
        $file = $request->file('new_img');//recojo la img
        $filename = time() . '.' . $file->getClientOriginalExtension();//le pongo nombre
        $file->move(public_path('storage/news'), $filename);//lo pongo en la carpeta storage
        
        $news = news::create([
            'new_img'           =>$filename,
            'new_title'         =>$request->new_title,
            'new_description'   =>$request->new_description,
            'author_name'       =>$request->author_name,
            'user_id'           =>$request->user_id,
        ]);
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
