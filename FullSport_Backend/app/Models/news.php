<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class news extends Model
{
    use HasFactory;

    protected $fillable = [
        'new_img',
        'new_title',
        'new_description',
        'author_img',
        'author_name',
        'new_date',
    ];

    protected $table = 'news';
}
