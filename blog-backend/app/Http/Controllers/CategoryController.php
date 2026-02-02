<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of categories.
     */
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    /**
     * Store a newly created category.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:categories,name',
        ]);

        $category = Category::create([
            'name' => $request->name,
        ]);

        return response()->json([
            'message' => 'Category created successfully',
            'category' => $category
        ]);
    }

    /**
     * Display the specified category.
     */
    public function show($id)
    {
        $category = Category::findOrFail($id);
        return response()->json($category);
    }

    /**
     * Update the specified category.
     */
    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);

        $request->validate([
            'name' => 'required|string|unique:categories,name,' . $category->id,
        ]);

        $category->update([
            'name' => $request->name,
        ]);

        return response()->json([
            'message' => 'Category updated successfully',
            'category' => $category
        ]);
    }

    /**
     * Remove the specified category.
     */
    public function destroy($id)
    {

    $category = Category::findOrFail($id);

    // Prevent deleting categories that have posts
    if ($category->posts()->exists()) {
        return response()->json([
            'message' => 'Cannot delete category with posts'
        ], 400);
    }

    $category->delete();

    return response()->json([
        'message' => 'Category deleted successfully'
    ]);
    
    }

   // Even if someone messes up routes later, controller stays safe.
    public function __construct()
    {
    $this->middleware(['auth:sanctum', 'admin'])
         ->except(['index', 'show']);
    }
}
