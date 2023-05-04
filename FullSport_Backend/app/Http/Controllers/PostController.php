<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $posts=Post::all();
        return response()->json([
            'status'=> 'success',
            'competitions'=> $posts,
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
    public function store(Request $request)
    {
        //
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title'      =>'required',
            'body'      =>'required',

        ]);
        //$user = User::find ($request->user_id);
        //$full_name = $user['id'];
        $post = Post::create([
            'image'=>$request->image,
            'title'=>$request->title,
            'body'=>$request->body,
            'user_id'=>$request->user_id,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $posts = Post::find($id);
        return response()->json([
            'status'=> 'success',
            'posts'=> $posts,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
