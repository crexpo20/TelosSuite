<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pausado extends Model
{
    use HasFactory;
    protected $table = 'paudaso';
    protected $primaryKey = 'idpausado';
    protected $fillable = ['idinmueble','fechaini','fechafin'];
    public $timestamps = false;



public function Inmueble(){
    return $this->hasMany(Comentario::class,'idinmueble');
}
}

