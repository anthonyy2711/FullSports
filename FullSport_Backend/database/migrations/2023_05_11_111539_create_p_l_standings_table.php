<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pl_standings', function (Blueprint $table) {
            $table->id();
            $table->string('name_league');
            $table->string('logo_league');
            $table->integer('position');
            $table->string('name_team');
            $table->string('team_logo');
            $table->integer('played_games');
            $table->integer('games_win');
            $table->integer('games_draw');
            $table->integer('games_lost');
            $table->integer('points');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pl_standings');
    }
};
