<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notificacion extends Model
{
    use HasFactory;
    protected $table = 'notificacion';
    protected $primaryKey = 'idnotificacion';
    protected $fillable = ['idusuario','idreserva','contenido'];
    public $timestamps = false;

    public function Huesped(){
        return $this->hasMany(huesped::class,'idhuesped');
    }
    public function Reserva(){
        return $this->hasMany(reserva::class,'idhuesped');
    }
}
