<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Painting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaintingQueryController extends Controller
{
    public function query(Request $request)
    {
        $paintings = Painting::query();
        if ($request->has('searched')) {
            $paintings = $paintings->where('name', 'like', "%{$request->query('searched')}%")
                ->orWhere('description', 'like', "%{$request->query('searched')}%");
        }
        if ($request->has('author')) {
            $paintings = $paintings->where('author', $request->query('author'));
        }
        if ($request->has('size')) {
            $paintings = $paintings->where('size', $request->query('size'));
        }
        if ($request->has('category_id')) {
            $paintings = $paintings->where('category_id', $request->query('category_id'));
        }
        return response()->json($paintings->get());
    }

    public function authors(Request $request)
    {
        return response()->json(Painting::select('author')->distinct()->get()->pluck('author'));
    }

    public function sizes(Request $request)
    {
        return response()->json(Painting::select('size')->distinct()->get()->pluck('size'));
    }
}
