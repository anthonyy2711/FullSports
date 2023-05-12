<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PLFixtures extends Model
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

    protected $table = 'pl_fixtures';
}
