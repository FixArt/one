<?php

namespace App\Models;

use App\Models\Order;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Painting extends Model
{
    use HasFactory;

    protected $table = "paintings";
    protected $fillable = ['name', 'url', 'author', 'size', 'price', 'description', 'category_id'];
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }
    // public function users(): BelongsToMany
    // {
    //     return $this->belongsToMany(User::class)->withTimestamps();
    // }
}
