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
        'logo_home',
        'logo_away',
        'winner',
        'status',
        'duration',
    ];

    use HasFactory;

    protected $table = 'fixtures';

}
