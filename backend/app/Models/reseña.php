<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reseña extends Model
{
    use HasFactory;
    protected $table = 'reseña';
    protected $primaryKey = 'idreseña';
    protected $fillable = ['idinmueble','idusuario','idanfitrion','descripcion','puntuacion','puntualidad','comunicacion'];
    public $timestamps = false;

    public function Inmueble(){
        return $this->hasMany(inmueble::class,'idinmueble');
    }
    public function Huesped(){
        return $this->hasMany(inmueble::class,'idhuesped');
    }
}
