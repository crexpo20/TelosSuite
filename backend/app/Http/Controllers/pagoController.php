<?php

namespace App\Http\Controllers;
use App\Models\Pago;
use Illuminate\Http\Request;

class pagoController extends Controller
{
    public function index()
    {
         // Obtener todos los productos de la base de datos
         $pago = pago::all();

         // Retornar los productos como respuesta
         return $pago;
    }
    /**
     * Store  
     */
    public function store(Request $request)
    {
        $pago = new pago ($request->all());
        $pago->save();
        return redirect()->action([pagoController::class, 'index']);
    }


    /**
     * Display 
     */
    public function show(string $id)
    {
        $pago =  pago::find($id);
        return $pago;
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
        $pago = pago::find($id);
         // Verifica si la categoría existe
         if (!$pago) {
            return response()->json(['mensaje' => 'pago no encontrada'], 404);
        }

        // Realiza la eliminación
        $pago->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'pago eliminado'], 200);

    }
}
