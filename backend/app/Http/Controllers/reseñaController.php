<?php

namespace App\Http\Controllers;
use App\Models\reseña;
use Illuminate\Http\Request;

class reseñaController extends Controller
{
    public function index()
    {
         // Obtener todos los productos de la base de datos
         $reseña = reseña::all();

         // Retornar los productos como respuesta
         return $reseña;
    }
    /**
     * Store  
     */
    public function store(Request $request)
    {
        $reseña = new reseña ($request->all());
        $reseña->save();
        return redirect()->action([reseñaController::class, 'index']);
    }


    /**
     * Display 
     */
    public function show(string $id)
    {
        $reseña =  reseña::find($id);
        return $reseña;
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
        $reseña = reseña::find($id);
         // Verifica si la categoría existe
         if (!$reseña) {
            return response()->json(['mensaje' => 'reseña no encontrada'], 404);
        }

        // Realiza la eliminación
        $reseña->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'reseña eliminado'], 200);

    }
}
