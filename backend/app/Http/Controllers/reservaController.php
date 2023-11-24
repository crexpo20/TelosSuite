<?php

namespace App\Http\Controllers;
use App\Models\Reserva;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class reservaController extends Controller
{
    public function index()
    {
         // Obtener todos los productos de la base de datos
         $reserva = reserva::all();

         // Retornar los productos como respuesta
         return $reserva;
    }
    /**
     * Store  
     */
    public function store(Request $request)
    {
        $reserva = new reserva ($request->all());
        $reserva->save();
        return redirect()->action([reservaController::class, 'index']);
    }


    /**
     * Display 
     */
    public function show(string $id)
    {
        $reserva =  reserva::find($id);
        return $reserva;
    }

    public function fechas(string $ini , string $fin )
    {
        return DB::table('reserva')->where('fechaini', $ini)->get();
        
    }
    

    /**
     * Update 
     */
    public function update(Request $request, string $id)
    {
    
    }

    /**
     * delete
     */
    public function destroy(string $id)
    {
        // Encuentra la categoría por su ID
        $reserva = reserva::find($id);
         // Verifica si la categoría existe
         if (!$reserva) {
            return response()->json(['mensaje' => 'reserva no encontrada'], 404);
        }

        // Realiza la eliminación
        $reserva->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'reserva eliminada'], 200);

    }

    public function usuario(string $usuario)
    {

        return DB::table('reserva')->where('idusuario', $usuario)->get();
        
    }

    public function inmueble(string $inmueble)
    {

        return DB::table('reserva')->where('idinmueble', $inmueble)->get();
        
    }
    public function anfitrion(string $anfitrion)
    {

        return DB::table('reserva')->where('idanfitrion', $anfitrion)->get();
        
    }

    public function id(string $idreserva)
    {

        return DB::table('reserva')->where('reserva', $idreserva)->get();
        
    }
    
}
