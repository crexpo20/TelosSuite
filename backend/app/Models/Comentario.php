<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
    use HasFactory;
    protected $table = 'comentario';
    protected $primaryKey = 'idcomentario';
    protected $fillable = ['idinmueble','idusuario','idreserva','descripcion','puntuacion','limpieza','exactitud','comunicacion'];
    public $timestamps = false;

    public function Inmueble(){
        return $this->hasMany(inmueble::class,'idinmueble');
    }
    public function Huesped(){
        return $this->hasMany(inmueble::class,'idhuesped');
    }
}
