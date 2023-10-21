<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Huesped extends Model
{
    use HasFactory;
    protected $table = 'huesped';
    protected $primaryKey = 'idhuesped';
    protected $fillable = ['username','nombre','apellido','correo','telefono','contraseña'];
    public $timestamps = false;

    public function Comentario(){
        return $this->hasMany(inmueble::class,'idhuesped');
    }
}
