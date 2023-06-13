<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'      => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email'     => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password'  => ['required'],
        ]);

        //dd($request->all());

        $user = new User;
        $user->name        = $request->name;
        $user->last_name   = $request->last_name;
        $user->email       = $request->email;
        $user->password    = Hash::make($request->password);

        $user->save();

        return $user;
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $user = User::find($id);

        return $user;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        $request->validate([
            'name' => 'string',
            'last_name' => 'string',
            'email' => 'string|email',
        ]);
        $id = $request->id;
        $user = User::findOrFail($request->id);
        if(password_verify($request->new_password,$user->password)){
            return response()->json([
                'status' => 'error',
                'message' => 'Same password as current password',
            ]);
        }

        $user->name = $request->name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;

        if(password_verify($request->actual_password,$user->password)){

        } else{
            return response()->json([
                'status' => 'error',
                'message' => 'Actual password incorrect',
            ]);
        }
        if($request->new_password != $request->repeat_new_password){
            return response()->json([
                'status' => 'error',
                'message' => 'New password does not match',
            ]);
        }

        $user->password = Hash::make($request->new_password);
        $user->save();
        return response()->json([
            'status' => 'success',
            'message' => 'User updated successfully',
            'user' => $user
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

    }
    public function getRole($id){

        $user = User::findOrFail($id);
        return  $user->roles->pluck('name')??[];
    }
}
