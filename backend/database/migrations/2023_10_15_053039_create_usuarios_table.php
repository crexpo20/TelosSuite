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
        Schema::create('usuario', function (Blueprint $table) {
            $table->id('idusuario');
            $table->string('username');
            $table->string('nombre');
            $table->string('apellido');
            $table->string('correo');
            $table->integer('telefono');
            $table->string('contraseña');
            $table->integer('anfitrion');
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
        Schema::dropIfExists('anfitrion');
    }
};
