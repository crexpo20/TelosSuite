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
            //$table->integer('idusuario');
            $table->foreignId('idusuario')->references('idusuario')->on('usuario');
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
            $table->integer('favorito');
            $table->string('imagen1');
            $table->string('descripcion1');
            $table->string('imagen2');
            $table->string('descripcion2');
            $table->string('imagen3');
            $table->string('descripcion3');
            $table->string('imagen4');
            $table->string('descripcion4');
            $table->string('imagen5');
            $table->string('descripcion5');
            $table->string('latitud');
            $table->string('longitud');
            $table->integer('pausado');
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
