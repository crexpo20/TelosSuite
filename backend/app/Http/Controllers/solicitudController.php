<?php

namespace App\Http\Controllers;
use App\Models\Solicitud;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class solicitudController extends Controller
{
    public function index()
    {
         // Obtener todos los productos de la base de datos
         $solicitud = solicitud::all();

         // Retornar los productos como respuesta
         return $solicitud;
    }
    /**
     * Store  
     */
    public function store(Request $request)
    {
        $solicitud = new solicitud ($request->all());
        $solicitud->save();
        return redirect()->action([solicitudController::class, 'index']);
    }


    /**
     * Display 
     */
    public function show(string $id)
    {
        $solicitud =  solicitud::find($id);
        return $solicitud;
    }

    public function fechas(string $ini , string $fin )
    {
        return DB::table('solicitud')->where('fechaini', $ini)->get();
        
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
        $solicitud = solicitud::find($id);
         // Verifica si la categoría existe
         if (!$solicitud) {
            return response()->json(['mensaje' => 'solicitud no encontrada'], 404);
        }

        // Realiza la eliminación
        $solicitud->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'solicitud eliminada'], 200);

    }

    public function usuario(string $usuario)
    {

        return DB::table('solicitud')->where('idusuario', $usuario)->get();
        
    }

    public function inmueble(string $inmueble)
    {

        return DB::table('solicitud')->where('idinmueble', $inmueble)->get();
        
    }
    public function reserva(string $reserva)
    {

        return DB::table('solicitud')->where('idreserva', $reserva)->get();
        
    }
}
