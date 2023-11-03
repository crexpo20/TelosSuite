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
        Schema::create('inmueble', function (Blueprint $table) {
            $table->id('idinmueble');
            //$table->integer('idanfitrion');
            $table->foreignId('idanfitrion')->references('idanfitrion')->on('anfitrion');
            $table->String('tipopropiedad');
            $table->String('tituloanuncio');
            $table->String('descripcion');
            $table->string('ubicacion');
            $table->integer('precio');
            $table->integer('capacidad');
            $table->integer('habitaciones');
            $table->integer('baños');
            $table->integer('camas');
            $table->integer('niños');
            $table->string('normas');
            $table->integer('mascotas');
            $table->string('qr');
            $table->string('ciudad');
            $table->integer('wifi');
            $table->integer('parqueo');
            $table->integer('cocina');
            $table->integer('refrigerador');
            $table->integer('lavaropa');
            $table->integer('piscina');
            $table->integer('privado');
            $table->integer('compartido');
            $table->integer('estado');
            $table->integer('contacto');
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
        Schema::dropIfExists('inmueble');
    }
};
