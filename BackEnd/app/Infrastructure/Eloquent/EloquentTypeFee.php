<?php

namespace App\Infrastructure\Eloquent;

use App\Infrastructure\Eloquent\EloquentService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;

class EloquentTypeFee extends Model
{
    use HasFactory, Notifiable;

    protected $table = 'type_fees';
    protected $fillable = [
        'type',
        'description',
    ];

    public function usages(): HasMany
    {
        return $this->hasMany(EloquentService::class);
    }
}