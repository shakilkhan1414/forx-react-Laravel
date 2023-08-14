<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','signup']]);
    }

    public function login(Request $request)
    {
        $validateData=$request->validate([
            'email'=> 'required',
            'password'=> 'required'
        ]);

        $credentials = request(['email', 'password']);

        if (filter_var($credentials['email'], FILTER_VALIDATE_EMAIL)) {
            if (! $token = auth()->attempt(['email' => $credentials['email'], 'password' => $credentials['password']])) {
                return response()->json(['error' => 'Invalid Email or Password!'], 401);
            }
        } else {
            if (! $token = auth()->attempt(['phone' => $credentials['email'], 'password' => $credentials['password']])) {
                return response()->json(['error' => 'Invalid Phone or Password!'], 401);
            }
        }

        return $this->respondWithToken($token);
    }

    public function signup(Request $request){
        $validateData=$request->validate([
            'name' => 'required | max:255',
            'phone' => 'numeric | unique:users',
            'password' => 'required | min:5 | confirmed'
        ]);

        $cleanedName = strtolower(trim($request->name));
        $username = str_replace(' ', '_', $cleanedName);
        $randomNumber = str_pad(mt_rand(0, 99), 2, '0', STR_PAD_LEFT);
        $uniqueUsername = $username . '_' . $randomNumber;

        User::create([
            'name'=> $request->name,
            'username'=> $uniqueUsername,
            'phone'=> $request->phone,
            'email'=> $request->email,
            'balance'=>'0',
            'password'=> Hash::make($request->password),
            'user_type'=>'2',
        ]);

        $request['email']=$request->phone;

        return $this->login($request);
    }

    public function me()
    {
        return response()->json(auth()->user()->load('userType'));
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'name'=>auth()->user()->name,
            'userType'=>auth()->user()->userType->user_type
        ]);
    }
}

