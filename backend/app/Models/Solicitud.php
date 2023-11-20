<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solicitud extends Model
{
    use HasFactory;
    protected $table = 'solicitud';
    protected $primaryKey = 'idsolicitud';
    protected $fillable = ['idinmueble','idusuario','idreserva'];
    public $timestamps = false;

    public function Inmueble(){
        return $this->hasMany(inmueble::class,'idinmueble');
    }
    public function Huesped(){
        return $this->hasMany(huesped::class,'idhuesped');
    }
    public function Reserva(){
        return $this->hasMany(reserva::class,'idhuesped');
    }
}
