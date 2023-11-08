<?php

namespace App\Http\Controllers;
use App\Models\favorito;
use Illuminate\Http\Request;

class favoritoController extends Controller
{
    public function index()
    {
         // Obtener todos los productos de la base de datos
         $favorito = favorito::all();

         // Retornar los productos como respuesta
         return $favorito;
    }
    /**
     * Store  
     */
    public function store(Request $request)
    {
        $favorito = new favorito ($request->all());
        $favorito->save();
        return redirect()->action([favoritoController::class, 'index']);
    }


    /**
     * Display 
     */
    public function show(string $id)
    {
        $favorito =  favorito::find($id);
        return $favorito;
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
        $favorito = favorito::find($id);
         // Verifica si la categoría existe
         if (!$favorito) {
            return response()->json(['mensaje' => 'favorito no encontrada'], 404);
        }

        // Realiza la eliminación
        $favorito->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'favorito eliminada'], 200);

    }
}
