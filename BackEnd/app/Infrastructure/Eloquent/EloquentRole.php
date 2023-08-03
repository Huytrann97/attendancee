<?php

namespace App\Infrastructure\Eloquent;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EloquentRole extends Model
{
    use HasFactory, Notifiable;

    protected $table = 'roles';
    protected $fillable = [
        'name',
        'description',
    ];

    public function users(){
        return $this->hasMany(EloquentUser::class);
    }


}
