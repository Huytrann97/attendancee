<?php

namespace App\Infrastructure\Eloquent;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;

class EloquentInquiry extends Model
{
    use HasFactory, Notifiable;

    protected $table = 'inquiries';
    protected $fillable = [
        'user_id',
        'content',
    ];

    // Define relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(EloquentUser::class, 'user_id');
    }
}
