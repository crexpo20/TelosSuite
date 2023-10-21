<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pago extends Model
{
    use HasFactory;
    protected $table = 'pago';
    protected $primaryKey = 'idpago';
    protected $fillable = ['idhuesped','fechaini','fechafin','monto'];
    public $timestamps = false;
}
