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
        Schema::create('teams', function (Blueprint $table) {
            $table->id();
            $table->string('name_team');
            $table->string('team_logo');
            $table->string('team_founded');
            $table->string('team_venue');
            $table->string('team_coach')->nullable();
            $table->string('player_name');
            $table->string('player_position');
            $table->string('player_date');
            $table->string('player_nationality');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teams');
    }
};
