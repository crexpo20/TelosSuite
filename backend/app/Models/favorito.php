<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class favorito extends Model
{
    use HasFactory;
    protected $table = 'favorito';
    protected $primaryKey = 'idfav';
    protected $fillable = ['idhuesped','idinmueble'];
    public $timestamps = false;
}
