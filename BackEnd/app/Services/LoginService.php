<?php
namespace App\Services;

use Illuminate\Support\Facades\Hash;
use App\Interfaces\EloquentUserRepositoryInterface;

class LoginService
{
    private $userRepository;

    public function __construct(EloquentUserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function login(string $email, string $password): array
    {
        $user = $this->userRepository->findByEmail($email);

        if (!$user || !Hash::check($password, $user->password)) {
            return [
                'message' => 'Cannot log in',
            ];
        }
        $token = $user->createToken('myapptoken')->plainTextToken;
        return [
            'user' => $user,
            'token' => $token,
        ];
    }
}
