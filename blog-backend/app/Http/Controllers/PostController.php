<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     * PUBLIC
     * View all published posts
     */
    public function index()
    {
        $posts = Post::with(['author:id,name', 'category:id,name'])
            ->where('status', Post::STATUS_PUBLISHED)
            ->latest()
            ->get();

        return response()->json($posts);
    }

    /**
     * Store a newly created resource in storage.
     *  AUTHENTICATED USER
     * Create post (default: draft)
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:255',
            'content'     => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'content' => 'required|string|min:10',
        ]);

        $post = Post::create([
            'title'       => $request->title,
            'content'     => $request->content,
            'category_id' => $request->category_id,
            'user_id'     => auth()->id(),
            'status'      => Post::STATUS_DRAFT,
        ]);

        return response()->json([
            'message' => 'Post created and awaiting approval',
            'post'    => $post
        ], 201);
    }

    /**
     * Display the specified resource.
     * PUBLIC
     * View single published post
     */
    public function show($id)
    {
        $post = Post::with(['author:id,name', 'category:id,name'])
            ->where('status', Post::STATUS_PUBLISHED)
            ->findOrFail($id);

        return response()->json($post);
    }
     
    /**
     * AUTHENTICATED USER
     * View own posts
     * 
     */
    public function myPosts()
    {
        $posts = Post::where('user_id', auth()->id())
            ->with('category:id,name')
            ->latest()
            ->get();

        return response()->json($posts);
    }
    /**
     * Update the specified resource in storage.
     * Check ownership
     * Validate input
     * Reset status to draft
     */
    public function update(Request $request, string $id)
    {
        $post = Post::findOrFail($id);

        // Ownership check
        if ($post->user_id !== auth()->id()) {
            return response()->json([
                'message' => 'Forbidden: You can only edit your own posts'
            ], 403);
        }

        $request->validate([
            'title'       => 'sometimes|string|max:255',
            'content'     => 'sometimes|string',
            'category_id' => 'sometimes|exists:categories,id',
        ]);

        $post->update($request->only([
            'title',
            'content',
            'category_id'
        ]));

        // Reset status after edit
        $post->status = Post::STATUS_DRAFT;
        $post->save();

        return response()->json([
            'message' => 'Post updated and awaiting re-approval',
            'post'    => $post
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = Post::findOrFail($id);

        // Ownership check
        if ($post->user_id !== auth()->id()) {
            return response()->json([
                'message' => 'Forbidden: You can only delete your own posts'
            ], 403);
        }

        $post->delete();

        return response()->json([
            'message' => 'Post deleted successfully'
        ]);
    }

    /**
     * ADMIN
     * View all posts (any status)
     */
    public function adminIndex()
    {
        $posts = Post::with(['author:id,name', 'category:id,name'])
            ->latest()
            ->get();

        return response()->json($posts);
    }

    /**
     * ADMIN
     * Approve post
     */
    public function approve($id)
    {
        $post = Post::findOrFail($id);

        $post->status = Post::STATUS_PUBLISHED;
        $post->save();

        return response()->json([
            'message' => 'Post approved and published'
        ]);
    }

    /**
     * ADMIN
     * Reject post
     */
    public function reject($id)
    {
        $post = Post::findOrFail($id);

        $post->status = Post::STATUS_REJECTED;
        $post->save();

        return response()->json([
            'message' => 'Post rejected'
        ]);
    }
}
