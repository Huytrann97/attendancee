<?php

namespace App\Http\Requests;

use App\Http\Requests\ApiRequest;

class LoginUserRequest extends ApiRequest
{
    public function rules()
    {
        return [
            'full_name'     => 'required',
            'email'         => 'required|email|unique:users,email',
            'password'      => 'required|min:8',
            'phone_number'  => 'nullable|numeric',
            'address'       => 'nullable',
            'img_url'       => 'nullable',
            'role_id'       => 'required|exists:roles,id',
            'country_code'  => 'required',
            'department_id' => 'required|exists:departments,id',
        ];
    }
}