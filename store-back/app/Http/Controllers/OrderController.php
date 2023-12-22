<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Order::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $attributes = request()->validate([
            'destination' => ['string', 'max:128'],
            'painting_id' => ['integer', 'required'],
            'is_completed' => ['boolean', 'nullable']
        ]);
        if(!(empty($attributes['is_completed']) || Auth::check()))
        {
            return response()->json(["message" => "Unauthorized"], 401);
        }
        if(empty($attributes['is_completed'])) $attributes['is_completed'] = false;
        if(empty(Order::find($attributes['painting_id']))) {
            return response()->json(["message" => "Painting not found"], 404);
        }
        $order = Order::create($attributes);
        return response()->json($order, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Order::find($id);
        if(!empty($order))
        {
            return response()->json($order);
        }
        else
        {
            return response()->json(["message" => "Order not found"], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $category, string $id)
    {
        if(Auth::check())
        {
            $attributes = request()->validate([
                'destination' => ['string', 'max:128'],
                'painting_id' => ['integer', 'required'],
                'is_completed' => ['boolean', 'required']
            ]);
            if(empty(Order::find($attributes['painting_id']))) {
                return response()->json(["message" => "Painting not found"], 404);
            }
            Order::find($id)->update($attributes);
            return response()->json(["message" => "Order updated"], 202);
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
            Order::destroy($id);
            return response()->json(["message" => "Order deleted"], 202);
        }
        else
        {
            return response()->json(["message" => "Unauthorized"], 401);
        }
    }
}
