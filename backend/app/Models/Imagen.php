<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{

    use HasFactory;
    protected $table = 'imagen';
    protected $primaryKey = 'idimagen';
    protected $fillable = ['idinmueble','url','descripcion'];
    public $timestamps = false;

    public function Inmueble(){
        return $this->hasMany(Inmueble::class,'idinmueble');
    }
}
