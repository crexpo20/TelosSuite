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
            $table->id('idreserva');
            $table->foreignId('idinmueble')->references('idinmueble')->on('inmueble');
            $table->foreignId('idusuario')->references('idusuario')->on('usuario');
            $table->string('id');
            $table->integer('idanfitrion');
            $table->string('fechaini');
            $table->string('fechafin');
            $table->integer('huespedes');
            $table->string('politicacancelacion');
            $table->integer('montototal');
            $table->string('estado');
            $table->integer('comentado');
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
