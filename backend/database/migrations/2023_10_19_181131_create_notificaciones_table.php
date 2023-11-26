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
        Schema::create('notificacion', function (Blueprint $table) {
            $table->id('idnotificacion')->id;
            $table->foreignId('idreserva')->references('idreserva')->on('reserva');
            $table->foreignId('idusuario')->references('idusuario')->on('usuario');
            $table->string('contenido');
            $table->integer('idsolicitud');
            $table->integer('estado');
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
        Schema::dropIfExists('notificacion');
    }
};
