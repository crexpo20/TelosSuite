<?php

namespace App\Http\Controllers;
use App\Models\Imagen;
use Illuminate\Http\Request;

class imagenController extends Controller
{
    public function index()
    {
         // Obtener todos los productos de la base de datos
         $imagen = imagen::all();

         // Retornar los productos como respuesta
         return $imagen;
    }
    /**
     * Store  
     */
    public function store(Request $request)
    {
        $imagen = new imagen ($request->all());
        $imagen->save();
        return redirect()->action([imagenController::class, 'index']);
    }


    /**
     * Display 
     */
    public function show(string $id)
    {
        $imagen =  imagen::find($id);
        return $imagen;
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
        $imagen = imagen::find($id);
         // Verifica si la categoría existe
         if (!$imagen) {
            return response()->json(['mensaje' => 'imagen no encontrada'], 404);
        }

        // Realiza la eliminación
        $imagen->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'imagen eliminada'], 200);

    }
}
