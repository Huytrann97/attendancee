<?php

namespace App\Infrastructure\Eloquent;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class EloquentCountry extends Model
{
    use HasFactory, Notifiable;

    protected $table = 'countries';
    protected $fillable = [
        'country_name',
        'country_code',
    ];
}
