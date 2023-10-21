<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inmueble extends Model
{
    use HasFactory;
    protected $table = 'inmueble';
    protected $primaryKey = 'idinmueble';
    protected $fillable = ['tipopropiedad','idanfitrion','tituloanuncio','descripcion','ubicacion','precio','capcidad','habitaciones','baños','camas','niños','normas','mascotas','qr'];
    public $timestamps = false;

    public function Anfitrion(){
        return $this->belongsTo(Anfitrion::class,'idanfitrion');
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
}
