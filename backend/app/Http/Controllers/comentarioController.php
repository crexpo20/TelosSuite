<?php

namespace App\Http\Controllers;
use App\Models\Comentario;
use Illuminate\Http\Request;

class comentarioController extends Controller
{
    
    public function index()
    {
         // Obtener todos los productos de la base de datos
         $comentario = comentario::all();

         // Retornar los productos como respuesta
         return $comentario;
    }
    /**
     * Store  
     */
    public function store(Request $request)
    {
        $comentario = new comentario ($request->all());
        $comentario->save();
        return redirect()->action([comentarioController::class, 'index']);
    }


    /**
     * Display 
     */
    public function show(string $id)
    {
        $comentario =  comentario::find($id);
        return $comentario;
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
        $comentario = comentario::find($id);
         // Verifica si la categoría existe
         if (!$comentario) {
            return response()->json(['mensaje' => 'comentario no encontrada'], 404);
        }

        // Realiza la eliminación
        $comentario->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'comentario eliminado'], 200);

    }
    public function getComentariosPorInmueble($idinmueble)
{
    // Asegúrate de que 'idinmueble' sea el nombre correcto de la columna en tu base de datos
    $comentarios = Comentario::where('idinmueble', $idinmueble)->get();

    return response()->json($comentarios);
}
}
