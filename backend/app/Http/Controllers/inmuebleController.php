<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class inmuebleController extends Controller
{
    public function index()
    {
         // Obtener todos los productos de la base de datos
         $inmueble = inmueble::all();

         // Retornar los productos como respuesta
         return $inmueble;
    }
    /**
     * Store  
     */
    public function store(Request $request)
    {
        $inmueble = new inmueble ($request->all());
        $inmueble->save();
        return redirect()->action([inmuebleController::class, 'index']);
    }


    /**
     * Display 
     */
    public function show(string $id)
    {
        $inmueble =  inmueble::find($id);
        return $inmueble;
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
        $inmueble = inmueble::find($id);
         // Verifica si la categoría existe
         if (!$inmueble) {
            return response()->json(['mensaje' => 'inmueble no encontrada'], 404);
        }

        // Realiza la eliminación
        $inmueble->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'inmueble eliminada'], 200);

    }
}
