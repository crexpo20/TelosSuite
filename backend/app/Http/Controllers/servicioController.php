<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class servicioController extends Controller
{
    public function index()
    {
         // Obtener todos los productos de la base de datos
         $servicio = servicio::all();

         // Retornar los productos como respuesta
         return $servicio;
    }
    /**
     * Store  
     */
    public function store(Request $request)
    {
        $servicio = new servicio ($request->all());
        $servicio->save();
        return redirect()->action([servicioController::class, 'index']);
    }


    /**
     * Display 
     */
    public function show(string $id)
    {
        $servicio =  servicio::find($id);
        return $servicio;
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
        $servicio = servicio::find($id);
         // Verifica si la categoría existe
         if (!$servicio) {
            return response()->json(['mensaje' => 'servicio no encontrada'], 404);
        }

        // Realiza la eliminación
        $servicio->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'servicio eliminada'], 200);

    }
}
