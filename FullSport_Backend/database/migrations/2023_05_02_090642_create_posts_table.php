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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('title');
            $table->text('body');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('username')->nullable();
            $table->unsignedBigInteger('comments_id')->nullable();

            $table->foreign('user_id')
                    ->references('id')->on('users')
                    ->onDelete('set null');

            $table->foreign('comments_id')
                    ->references('id')->on('comments')
                    ->onDelete('set null');

            $table->integer('likes')->nullable();;
            $table->integer('comments')->nullable();;

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
