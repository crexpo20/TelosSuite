<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class huespedController extends Controller
{
    public function index()
    {
         // Obtener todos los productos de la base de datos
         $huesped = huesped::all();

         // Retornar los productos como respuesta
         return $huesped;
    }
    /**
     * Store  
     */
    public function store(Request $request)
    {
        $huesped = new huesped ($request->all());
        $huesped->save();
        return redirect()->action([huespedController::class, 'index']);
    }


    /**
     * Display 
     */
    public function show(string $id)
    {
        $huesped =  huesped::find($id);
        return $huesped;
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
        $huesped = huesped::find($id);
         // Verifica si la categoría existe
         if (!$huesped) {
            return response()->json(['mensaje' => 'huesped no encontrada'], 404);
        }

        // Realiza la eliminación
        $huesped->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'huesped eliminada'], 200);

    }
}
