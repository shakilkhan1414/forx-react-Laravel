<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{

    public function index()
    {
        $payments=Payment::all();
        return response()->json($payments);
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Payment $payment)
    {
        return response()->json($payment);
    }

    public function update(Request $request, Payment $payment)
    {

        $validatedData=$request->validate([
            'number'=> 'required | numeric'
        ]);

        $payment->update($validatedData);

    }

    public function destroy(Payment $payment)
    {
        //
    }
}

