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
        Schema::create('soil_moistures', function (Blueprint $table) {
            $table->id();
            $table->foreignId('plant_id')->references('id')->on('plants')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('node_send_log_id')->nullable()->references('id')->on('node_send_logs')->onUpdate('cascade')->onDelete('cascade');
            $table->tinyInteger('moisture');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('soil_moistures');
    }
};
