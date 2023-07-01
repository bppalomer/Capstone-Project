<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Recruiter;
use Illuminate\Http\Request;
use Illuminate\support\Facades\Hash;

class AuthController extends Controller
{
    public function users(Request $request) {
        
        $user = new User();
        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->email = $request->email;
        $user->address = $request->address;
        $user->province = $request->province;
        $user->city = $request->city;
        $user->zip = $request->zip;
        $user->birthdate = $request->birthdate;
        $user->sex = $request->sex;
        $user->gamename = $request->gamename;
        $user->bio = $request->bio;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json(['message' => 'User Registered Successfully']);

    }

    public function recruiters(Request $request) {
        $user = new Recruiter();
        $user->teamname = $request->teamname;
        $user->companyaddress = $request->companyaddress;
        $user->email = $request->email;
        $user->gamename = $request->gamename;
        $user->jobdescription = $request->jobdescription;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json(['message' => 'Recruiter Registered Successfully']);
    }

    public function login(Request $request) {

        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        

       if (auth()->attempt($credentials)) {
        $user = auth()->user();

        $token = $user->createToken('auth_token')->plainTextToken;
        //Linting error


        return response()->json(['token' => $token]);
       } else {
        return response()->json(['message' =>'Log In Failed']);
       }
    }
}
