<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anfitrion extends Model
{
    use HasFactory;
    protected $table = 'anfitrion';
    protected $primaryKey = 'idanfitrion';
    protected $fillable = ['username','nombre','apellido','correo','telefono','contraseña'];
    public $timestamps = false;

    public function Inmueble(){
        return $this->hasMany(Inmueble::class,'idanfitrion');
    }
}
