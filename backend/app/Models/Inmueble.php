<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inmueble extends Model
{
    use HasFactory;
    protected $table = 'inmueble';
    protected $primaryKey = 'idinmueble';
    protected $fillable = ['tipopropiedad','idusuario','tituloanuncio','descripcion','ubicacion','precio','capacidad','habitaciones','baños','camas','niños','normas','mascotas','qr','ciudad','wifi','parqueo','cocina','refrigerador','lavaropa','piscina','privado','compartido','estado','contacto','favorito','imagen1','descripcion1','imagen2','descripcion2','imagen3','descripcion3','imagen4','descripcion4','imagen5','descripcion5','longitud','latitud','pausado'];
    public $timestamps = false;

    public function Usuario(){
        return $this->belongsTo(usuario::class,'idusuario');
    }

    public function Comentario(){
        return $this->hasMany(Comentario::class,'idinmueble');
    }
    
    public function Imagen(){
        return $this->hasMany(Imagen::class,'idinmueble');
    }

    public function Reserva(){
        return $this->belongsTo(Reserva::class,'idinmueble');
    }

    public function Pago(){
        return $this->hasMany(Pago::class,'idinmueble');
    }

    public function Servicio(){
        return $this->hasMany(Servicio::class,'idinmueble');
    }

    public function favorito(){
        return $this->hasMany(favorito::class,'idfav');
    }
}
