<?php
namespace App\Http\Controllers\Auth;

use App\Infrastructure\Eloquent\EloquentUser;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginUserRequest;
use Illuminate\Support\Facades\Hash;
use App\Services\LoginService;
use Illuminate\Http\JsonResponse;


class LoginController extends Controller
{
    private $loginService;

    public function __construct(LoginService $loginService)
    {
        $this->loginService = $loginService;
    }

    public function login(LoginUserRequest $request): JsonResponse
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $result = $this->loginService->login($email, $password);

        if (isset($result['message'])) {
            return response()->json(['message' => $result['message']], 401);
        }

        return response()->json($result, 200);
    }
}
