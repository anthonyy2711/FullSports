<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Competitions extends Model
{
    protected $fillable = [
        'name_league', 
        'logo_league', 
        'position',
        'name_team',  
        'team_logo', 
        'played_games',
        'games_win',
        'games_draw', 
        'games_lost', 
        'points'
    ];

    use HasFactory;

    protected $table = 'competitions';
}
