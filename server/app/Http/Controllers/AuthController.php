<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Recruiter;
use Illuminate\Http\Request;
use Illuminate\support\Facades\Hash;
use Illuminate\Validation\Rule;

class AuthController extends Controller
{
    public function users(Request $request) {

        $request->validate([
            'email' => 'required|email|unique:users,email',
            // Add unique validation rule for the email field in the users table
            // ...
        ]);
        
        $user = new User();
        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json(['message' => 'User Registered Successfully']);

    }

    public function recruiters(Request $request) {

        $request->validate([
            'email' => 'required|email|unique:recruiters,email',
            // Add unique validation rule for the email field in the recruiters table
            // ...
        ]);
        
        $user = new Recruiter();
        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json(['message' => 'Recruiter Registered Successfully']);
    }

    public function login(Request $request)
{
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $userType = $request->input('userType');

    if ($userType === 'user') {
        $user = User::where('email', $credentials['email'])->first();

        if ($user && Hash::check($credentials['password'], $user->password)) {
            // User authentication successful
            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json(['token' => $token, 'userType' => 'user']);
        }
    } elseif ($userType === 'recruiter') {
        $recruiter = Recruiter::where('email', $credentials['email'])->first();

        if ($recruiter && Hash::check($credentials['password'], $recruiter->password)) {
            // Recruiter authentication successful
            $token = $recruiter->createToken('auth_token')->plainTextToken;
            return response()->json(['token' => $token, 'userType' => 'recruiter']);
        }
    }

    // Login failed or user type not found
    return response()->json(['message' => 'Invalid login'], 401);
}

    

    
}
