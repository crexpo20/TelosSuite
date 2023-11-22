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
        Schema::create('reserva', function (Blueprint $table) {
            $table->id('id');
            $table->foreignId('idinmueble')->references('idinmueble')->on('inmueble');
            $table->foreignId('idusuario')->references('idusuario')->on('usuario');
            $table->string('idreserva');
            $table->integer('idanfitrion');
            $table->integer('fechaini');
            $table->integer('fechafin');
            $table->integer('huespedes');
            $table->string('politicacancelacion');
            $table->integer('montototal')
            $table->string('estado');
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
        Schema::dropIfExists('reserva');
    }
};
