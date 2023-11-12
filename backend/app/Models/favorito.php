<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class favorito extends Model
{
    use HasFactory;
    protected $table = 'favorito';
    protected $primaryKey = 'idfav';
    protected $fillable = ['idusuario','idinmueble'];
    public $timestamps = false;

public function Usuario(){
    return $this->hasMany(usuario::class,'idusuario');
}

public function Inmueble(){
    return $this->hasMany(Comentario::class,'idinmueble');
}
}

