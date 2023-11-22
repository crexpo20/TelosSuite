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
        Schema::create('solicitud', function (Blueprint $table) {
            $table->id('idsolicitud');
            $table->foreignId('idinmueble')->references('idinmueble')->on('inmueble');
            $table->foreignId('idusuario')->references('idusuario')->on('usuario');
            $table->foreignId('idreserva')->references('idreserva')->on('reserva');
            $table->string('estado');
            $table->integer('idanfitrion');

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
        Schema::dropIfExists('solicitud');
    }
};
