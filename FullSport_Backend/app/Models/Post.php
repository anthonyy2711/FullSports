<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'image',
        'title',
        'body',
        'user_id',
        'comments_id',
        'likes',
        'comments',
    ];

    //RElacion uno a muchos inverso

    public function user(){
        return $this->belongsTo('App\Models\Users');
    }
    public function comments(){
        return $this->hasMany('App\Models\Comments');
    }
}
