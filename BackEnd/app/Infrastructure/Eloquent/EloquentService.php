<?php

namespace App\Infrastructure\Eloquent;

use App\Infrastructure\Eloquent\EloquentUsage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;

class EloquentService extends Model
{
    use HasFactory, Notifiable;

    protected $table = 'services';
    protected $fillable = [
        'name',
        'type_fee_id',
        'price',
        'created_at',
    ];

    // Define relationships
    public function typeFee(): BelongsTo
    {
        return $this->belongsTo(EloquentTypeFee::class, 'type_fee_id');
    }

    public function usages(): HasMany
    {
        return $this->hasMany(EloquentUsage::class);
    }
}