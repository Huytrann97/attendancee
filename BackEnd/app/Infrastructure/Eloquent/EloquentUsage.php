<?php

namespace App\Infrastructure\Eloquent;

use App\Infrastructure\Eloquent\EloquentService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;

class EloquentUsage extends Model
{
    use HasFactory, Notifiable;

    protected $table = 'usages';
    protected $fillable = [
        'service_id',
        'user_id',
        'usage_count',
        'actual_fee',
        'month',
        'year',
        'created_at',
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(EloquentUser::class);
    }

    public function service(): BelongsTo
    {
        return $this->belongsTo(EloquentService::class, 'service_id');
    }

    // Scopes
    protected function scopeSearchByUserId($query, int $userId)
    {
        return $query->where('user_id', $userId);
    }

    protected function scopeSearchByYear($query, string $year)
    {
        return $query->where('year', $year);
    }
}