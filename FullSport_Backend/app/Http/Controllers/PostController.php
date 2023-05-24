<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index','show']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        $posts=Post::all();
        $posts=Post::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status'=> 'success',
            'posts'=> $posts,
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
        $id =  $request->user_id;
        $full_name = User::select('name')->where('id', $id)->value('name');

        $file = $request->file('image');
        $filename = time() . '.' . $file->getClientOriginalExtension();
        $file->move(public_path('storage/posts'), $filename);
        // $image = new Image;
        // $image= base64_encode(file_get_contents($request->file('image')));
        $post = Post::create([
            'image'=>$filename,
            'title'=>$request->title,
            'body'=>$request->body,
            'user_id'=>$request->user_id,
            'username'=>$full_name,
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
