<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    use HasFactory;
    protected $table = 'reserva';
    protected $primaryKey = 'idreserva';
    protected $fillable = ['idinmueble','idusuario','idanfitrion','fechaini','fechafin','huespedes','politicacancelacion','montototal'];
    public $timestamps = false;

    public function Inmueble(){
        return $this->hasMany(inmueble::class,'idinmueble');
    }
    public function Huesped(){
        return $this->hasMany(inmueble::class,'idhuesped');
    }
}
