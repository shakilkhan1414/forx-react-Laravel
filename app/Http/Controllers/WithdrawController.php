<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Withdraw;
use Illuminate\Http\Request;

class WithdrawController extends Controller
{
    public function index()
    {
        $withdraws=Withdraw::with('user')->get();
        return response()->json($withdraws);
    }

    public function store(Request $request)
    {
        $validateData=$request->validate([
            'withdraw_method' => 'required',
            'withdraw_number' => 'required',
            'withdraw_amount' => 'required | numeric'
        ]);

        Withdraw::create([
            'withdraw_method'=> $request->withdraw_method,
            'withdraw_number'=> $request->withdraw_number,
            'withdraw_amount'=> $request->withdraw_amount,
            'user_id'=> $request->user_id,
        ]);

        $user=User::find($request->user_id);

            $newBalance=intval($user->balance) - intval($request->withdraw_amount);

            $user->update([
                'balance'=> $newBalance
        ]);

    }

    public function show(Withdraw $withdraw)
    {
        //
    }

    public function update(Request $request, Withdraw $withdraw)
    {
        $validatedData=$request->validate([
            'status'=> 'required'
        ]);

        $withdraw->update($validatedData);

    }

    public function destroy(Withdraw $withdraw)
    {
        //
    }
}
