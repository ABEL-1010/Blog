<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\Category;
use App\Models\User;
use Illuminate\Support\Str;

class PostSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::where('email', 'admin@example.com')->first();
        $category = Category::first();

        Post::create([
            'title' => 'Welcome to the Blog',
            'slug' => Str::slug('Welcome to the Blog') . '-' . time(), // adds timestamp
            'content' => 'This is a sample blog post seeded into the database.',
            'image' => 'https://placehold.co/600x400/cccccc/000000.png?text=Blog+Image',
            'status' => 'published',
            'is_featured' => true,
            'user_id' => $admin->id,
            'category_id' => $category->id,
        ]);

        Post::create([
            'title' => 'Building Smart Cities with Data',
            'slug' => Str::slug('Building Smart Cities with Data') . '-' . time(),
            'content' => 'Smart cities rely on data-driven decision making.',
            'image' => 'https://placehold.co/600x400/cccccc/000000.png?text=Blog+Image',
            'status' => 'published',
            'is_featured' => true,
            'user_id' => $admin->id,
            'category_id' => $category->id,
        ]);
    }
}
