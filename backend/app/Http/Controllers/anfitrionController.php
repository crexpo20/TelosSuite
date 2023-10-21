<?php

namespace App\Http\Controllers;
use App\Models\Anfitrion;
use Illuminate\Http\Request;

class anfitrionController extends Controller
{
    public function index()
    {
         // Obtener todos los productos de la base de datos
         $anfitrion = anfitrion::all();

         // Retornar los productos como respuesta
         return $anfitrion;
    }
    /**
     * Store  
     */
    public function store(Request $request)
    {
        $anfitrion = new anfitrion ($request->all());
        $anfitrion->save();
        return redirect()->action([anfitrionController::class, 'index']);
    }


    /**
     * Display 
     */
    public function show(string $id)
    {
        $anfitrion =  anfitrion::find($id);
        return $anfitrion;
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
        $anfitrion = anfitrion::find($id);
         // Verifica si la categoría existe
         if (!$anfitrion) {
            return response()->json(['mensaje' => 'anfitrion no encontrada'], 404);
        }

        // Realiza la eliminación
        $anfitrion->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'anfitrion eliminada'], 200);

    }
}
