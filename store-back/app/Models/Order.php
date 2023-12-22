<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    use HasFactory;

    protected $table = "categories";
    protected $fillable = ['destination', 'is_completed'];
    public function painting(): BelongsTo
    {
        return $this->belongsTo(Painting::class);
    }
}
