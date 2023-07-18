<?php

namespace App\Http\Controllers\Auth;

use App\Infrastructure\Eloquent\EloquentUser;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginUserRequest;
use Illuminate\Support\Facades\Hash;
class LoginController extends Controller
{
    public function login(LoginUserRequest $request)
    {
        $user = EloquentUser::where('email' , $request['email'])->first();  //repo
        if(!$user || !Hash::check($request['password'], $user->password)){  //service
            return response([
                'message' => 'Can not Log in'
            ] , 401);
        }
        //if good then log in, create token from user
        $token = $user->createToken('myapptoken')->plainTextToken;  //controller

        //create response from user and token
        $response = [
            'user' => $user ,
            'token' => $token
        ];
        return response()->json($response , 201);
    }
}
