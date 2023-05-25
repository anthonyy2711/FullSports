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
        Schema::create('p_l_teams', function (Blueprint $table) {
            $table->id();
            $table->string('name_team');
            $table->string('team_logo');
            $table->string('team_founded');
            $table->string('venue_name');
            $table->string('venue_capacity');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('p_l_teams');
    }
};
