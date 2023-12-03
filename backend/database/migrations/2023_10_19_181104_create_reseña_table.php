<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reseña', function (Blueprint $table) {
            $table->id('idreseña');
            $table->foreignId('idusuario')->references('idusuario')->on('usuario');
            $table->integer('idanfitrion');
            $table->String('descripcion');
            $table->integer('puntuacion');
            $table->integer('puntualidad');
            $table->integer('comunicacion');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reseña');
    }
};
