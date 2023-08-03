<?php

namespace App\Http\Requests;

use App\Http\Requests\ApiRequest;

class LoginUserRequest extends ApiRequest
{
    public function rules()
    {
        return [
            'email'         => 'required|email|email',
            'password'      => 'required|min:8',
           
        ];
    }
}