<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Category::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if(true || Auth::check())
        {
            $attributes = request()->validate([
                'name' => ['nullable', 'string', 'max:128'],
            ]);
            $category = Category::create($attributes);
            return response()->json($category, 201);
        }
        else
        {
            return response()->json(["message" => "Unauthorized"], 401);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::find($id);
        if(!empty($category))
        {
            return response()->json($category);
        }
        else
        {
            return response()->json(["message" => "Category not found"], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category, string $id)
    {
        if(true || Auth::check())
        {
            $attributes = request()->validate([
                'name' => ['nullable', 'string', 'max:128'],
            ]);
            Category::find($id)->update($attributes);
            return response()->json(["message" => "Category updated"], 202);
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
        if(true || Auth::check())
        {
            Category::destroy($id);
            return response()->json(["message" => "Category deleted"], 202);
        }
        else
        {
            return response()->json(["message" => "Unauthorized"], 401);
        }
    }
    public function paintings(string $id)
    {
        $category = Category::find($id);
        if(!empty($category))
        {
            return response()->json($category->paintings);
        }
        else
        {
            return response()->json(["message" => "Category not found"], 404);
        }
    }
}
