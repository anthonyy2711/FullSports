<?php

namespace App\Models;

use Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fixtures extends Model
{
    protected $fillable = [
        'name_home',
        'name_away',
        'round',
        'logo_home',
        'logo_away',
        'winner',
        'status',
    ];

    use HasFactory;

    protected $table = 'fixtures';

}
