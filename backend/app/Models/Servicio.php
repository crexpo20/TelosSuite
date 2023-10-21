<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Servicio extends Model
{
    use HasFactory;
    protected $table = 'servicio';
    protected $primaryKey = 'idservicio';
    protected $fillable = ['idinmueble','titulo'];
    public $timestamps = false;

    public function Inmueble(){
        return $this->hasMany(Inmueble::class,'idinmueble');
    }
}
