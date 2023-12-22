<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Painting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaintingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Painting::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if (true || Auth::check()) {
            $attributes = request()->validate([
                'name' => ['nullable', 'string', 'max:128'],
                'url' => ['nullable', 'string', 'max:256'],
                'author' => ['nullable', 'string', 'max:128'],
                'size' => ['nullable', 'string', 'max:16'],
                'price' => ['numeric', 'string'],
                'description' => ['nullable', 'string', 'max:65535'],
                'category_id' => ['nullable', 'integer', 'max:11'],
            ]);
            if ((!empty($attributes['category_id'])) && empty(Category::find($attributes['category_id']))) {
                return response()->json(["message" => "Category not found"], 404);
            }
            $painting = Painting::create($attributes);
            return response()->json($painting, 201);
        } else {
            return response()->json(["message" => "Unauthorized"], 401);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $painting = Painting::find($id);
        if (!empty($painting)) {
            return response()->json($painting);
        } else {
            return response()->json(["message" => "Painting not found"], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(string $id)
    {
        if (true || Auth::check()) {
            $attributes = request()->validate([
                'name' => ['nullable', 'string', 'max:128'],
                'url' => ['nullable', 'string', 'max:256'],
                'author' => ['nullable', 'string', 'max:128'],
                'size' => ['nullable', 'string', 'max:16'],
                'price' => ['numeric', 'string'],
                'description' => ['nullable', 'string', 'max:65535'],
                'category_id' => ['nullable', 'integer', 'max:11'],
            ]);
            if ((!empty($attributes['category_id'])) && empty(Category::find($attributes['category_id']))) {
                return response()->json(["message" => "Category not found"], 404);
            }
            Painting::find($id)->update($attributes);
            return response()->json(["message" => "Painting updated"], 202);
        } else {
            return response()->json(["message" => "Unauthorized"], 401);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (true || Auth::check()) {
            Painting::destroy($id);
            return response()->json(["message" => "Painting deleted"], 202);
        } else {
            return response()->json(["message" => "Unauthorized"], 401);
        }
    }
    public function orders(string $id)
    {
        $painting = Painting::find($id);
        if (!empty($painting)) {
            return response()->json($painting->orders);
        } else {
            return response()->json(["message" => "Painting not found"], 404);
        }
    }
}
