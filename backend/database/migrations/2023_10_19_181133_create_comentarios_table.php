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
        Schema::create('comentario', function (Blueprint $table) {
            $table->id('idcomentario');
            $table->foreignId('idinmueble')->references('idinmueble')->on('inmueble');
            $table->foreignId('idusuario')->references('idusuario')->on('usuario');
            
            $table->String('descripcion');
            $table->integer('puntuacion');
            $table->integer('limpieza');
            $table->integer('exactitud');
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
        Schema::dropIfExists('comentario');
    }
};
