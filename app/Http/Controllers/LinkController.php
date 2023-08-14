<?php

namespace App\Http\Controllers;

use App\Models\Link;
use Illuminate\Http\Request;

class LinkController extends Controller
{

    public function index()
    {
        $links=Link::all();
        return response()->json($links);
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Link $link)
    {
        return response()->json($link);
    }

    public function update(Request $request, Link $link)
    {
        $validatedData=$request->validate([
            'link'=> 'required'
        ]);

        $link->update($validatedData);
    }

    public function destroy(Link $link)
    {
        //
    }
}
