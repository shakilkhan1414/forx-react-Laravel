<?php

namespace App\Http\Controllers;

use App\Models\Deposit;
use Illuminate\Http\Request;
use App\Models\User;

class DepositController extends Controller
{

    public function index()
    {
        $deposits=Deposit::with('user')->get();
        return response()->json($deposits);
    }

    public function store(Request $request)
    {
        $validateData=$request->validate([
            'payment_method' => 'required',
            'send_from' => 'required',
            'amount' => 'required | numeric',
            'transaction_id' => 'required'
        ]);

        Deposit::create([
            'payment_method'=> $request->payment_method,
            'send_from'=> $request->send_from,
            'amount'=> $request->amount,
            'transaction_id'=> $request->transaction_id,
            'user_id'=> $request->user_id,
        ]);

    }

    public function show(Deposit $deposit)
    {

    }

    public function update(Request $request, $id)
    {
        $deposit=Deposit::find($id);

        $validatedData=$request->validate([
            'status'=> 'required'
        ]);

        $deposit->update($validatedData);

        if($validatedData['status']=='1'){
            $user=User::find($deposit->user_id);

            $newBalance=intval($user->balance) + intval($deposit->amount);

            $user->update([
                'balance'=> $newBalance
            ]);
        }

    }

    public function destroy(Deposit $deposit)
    {

    }
}
