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
        Schema::create('fixtures', function (Blueprint $table) {
            $table->id();
            $table->string('name_league');
            $table->string('logo_league');
            $table->string('date_event');
            $table->string('name_home');
            $table->string('name_away');
            $table->string('logo_home');
            $table->string('logo_away');
            $table->string('goals_home');
            $table->string('goals_away');
            $table->string('status');
            $table->string('duration');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fixtures');
    }
};
