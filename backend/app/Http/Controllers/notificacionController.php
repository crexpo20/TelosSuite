<?php

namespace App\Http\Controllers;
use App\Models\Notificacion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class notificacionController extends Controller
{
    public function index()
    {
         // Obtener todos los productos de la base de datos
         $notificacion = notificacion::all();

         // Retornar los productos como respuesta
         return $notificacion;
    }
    /**
     * Store  
     */
    public function store(Request $request)
    {
        $notificacion = new notificacion ($request->all());
        $notificacion->save();
        return redirect()->action([notificacionController::class, 'index']);
    }


    /**
     * Display 
     */
    public function show(string $id)
    {
        $notificacion =  notificacion::find($id);
        return $notificacion;
    }

    public function fechas(string $ini , string $fin )
    {
        return DB::table('notificacion')->where('fechaini', $ini)->get();
        
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
        $notificacion = notificacion::find($id);
         // Verifica si la categoría existe
         if (!$notificacion) {
            return response()->json(['mensaje' => 'notificacion no encontrada'], 404);
        }

        // Realiza la eliminación
        $notificacion->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'notificacion eliminada'], 200);

    }

    public function usuario(string $usuario)
    {

        return DB::table('notificacion')->where('idusuario', $usuario)->get();
        
    }
}
