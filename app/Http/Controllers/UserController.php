<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function index()
    {
        $users=User::with('userType')->get();
        return response()->json($users);
    }

    public function store(Request $request)
    {
        $validateData=$request->validate([
            'email' => 'max:255',
            'name' => 'required | max:255',
            'phone' => 'numeric | unique:users',
            'password' => 'required | min:5 | confirmed',
            'user_type' => 'required'
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
            'user_type'=>$request->user_type,
        ]);
    }

    public function show($id)
    {
        $user=User::find($id);
        return response()->json($user);
    }

    public function update(Request $request, $id)
    {
        $user=User::find($id);

        $validatedData=$request->validate([
            'name'=> 'required',
            'phone'=> 'required | numeric',
            'user_type'=> 'required'
        ]);
        if($request->password){
            $validatedData['password']=Hash::make($request->password);
        }

        $validatedData['email']=$request->email;

        $user->update($validatedData);
    }

    public function destroy($id)
    {
        User::destroy($id);
    }
}
