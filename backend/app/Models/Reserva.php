<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    use HasFactory;
    protected $table = 'reserva';
    protected $primaryKey = 'id';
    protected $fillable = ['idinmueble','idusuario','idreserva','idanfitrion','fechaini','fechafin','politicacancelacion','montototal','estado'];
    public $timestamps = false;

    public function Inmueble(){
        return $this->hasMany(inmueble::class,'idinmueble');
    }
    public function Huesped(){
        return $this->hasMany(inmueble::class,'idhuesped');
    }
}
