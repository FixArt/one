<?php

namespace App\Http\Controllers;

use App\Models\Suggestion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SuggestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if(Auth::check())
        {
            return response()->json(Suggestion::all());
        }
        else
        {
            return response()->json(["message" => "Unauthorized"], 401);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $attributes = request()->validate([
            'email' => ['required', 'email', 'max:320'],
            'content' => ['required', 'string', 'max:65535']
        ]);
        $suggestion = Suggestion::create($attributes);
        return response()->json($suggestion, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        if(Auth::check())
        {
            $order = Suggestion::find($id);
            if(!empty($order))
            {
                return response()->json($order);
            }
            else
            {
                return response()->json(["message" => "Suggestion not found"], 404);
            }
        }
        else
        {
            return response()->json(["message" => "Unauthorized"], 401);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Suggestion $category, string $id)
    {
        if(Auth::check())
        {
            $attributes = request()->validate([
                'email' => ['required', 'email', 'max:320'],
                'content' => ['required', 'string', 'max:65535']
            ]);
            Suggestion::find($id)->update($attributes);
            return response()->json(["message" => "Suggestion updated"], 202);
        }
        else
        {
            return response()->json(["message" => "Unauthorized"], 401);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(Auth::check())
        {
            Suggestion::destroy($id);
            return response()->json(["message" => "Suggestion deleted"], 202);
        }
        else
        {
            return response()->json(["message" => "Unauthorized"], 401);
        }
    }
}
