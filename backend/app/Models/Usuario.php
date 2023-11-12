<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    protected $table = 'usuario';
    protected $primaryKey = 'idusuario';
    protected $fillable = ['username','nombre','apellido','correo','telefono','contraseña','anfitrion'];
    public $timestamps = false;

    public function Inmueble(){
        return $this->hasMany(Inmueble::class,'idusuario');
    }
    public function favorito(){
        return $this->hasMany(favorito::class,'idfav');
    }
}
