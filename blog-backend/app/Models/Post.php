<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    /**
     * Mass assignable fields
     */
    protected $fillable = [
        'title',
        'content',
        'category_id',
        'user_id',
        'status',
    ];

    /**
     * Post belongs to a user (author)
     */
    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Post belongs to one category
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Optional: Post status constants
     */
    public const STATUS_DRAFT = 'draft';
    public const STATUS_PUBLISHED = 'published';
    public const STATUS_REJECTED = 'rejected';
}

