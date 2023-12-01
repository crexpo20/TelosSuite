<?php

namespace App\Http\Controllers;
use App\Models\pausado;
use Illuminate\Http\Request;

class pausadoController extends Controller
{
    public function index($userID)
    {
        try {
            // Obtener los pausados filtrados por el ID del usuario
            
    
$pausados = pausado::where('idusuario', $userID)->get();

            if ($pausados->isEmpty()) {
                
               
return response()->json(['message' => 'No se encontraron pausados para este usuario'], 404);
            }

            return $pausados;
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al obtener pausados: ' . $e->getMessage()], 500);
        }
    }
   
      
   
        // Método para agregar un pausado
        
        
        public function store(Request $request)
{
    try {
        $idinmueble = $request->input('idinmueble');
        $idusuario = $request->input('idusuario');
        
        // Verificar si ya existe un pausado con el mismo idinmueble y idusuario
        $existingFavorite = pausado::where('idinmueble', $idinmueble)
            ->where('idusuario', $idusuario)
            ->first();
        
        if ($existingFavorite) {
            return response()->json(['message' => 'El inmueble ya está en pausados'], 400);
        }
        
        // Si no existe, se puede agregar como un nuevo pausado
        $pausado = new pausado();
        $pausado->idinmueble = $idinmueble;
        $pausado->fechaini = $fechaini;
        $pausado->fechafin = $fechafin;
        $pausado->save();
        
        return response()->json(['message' => 'pausado agregado con éxito']);
    } catch (\Exception $e) {
        return response()->json(['message' => 'Error al agregar pausado: ' . $e->getMessage()], 500);
    }
}




    /**
     * Display 
     */
    public function show(string $idpau)
    {
        $pausado =  pausado::find($idpau);
        return $pausado;
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
    public function destroy($userID, $sitioID)
    {
        try {
            $pausado = pausado::where('idusuario', $userID)
                                ->where('idinmueble', $sitioID)
                                ->first();

            if ($pausado) {
                $pausado->delete();
                return response()->json(['message' => 'pausado eliminado correctamente'], 200);
            } else {
                return response()->json(['error' => 'El pausado no existe'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'No se pudo eliminar el pausado'], 500);
        }
    }
    public function inmueble(string $inmueble)
    {

        return DB::table('pausado')->where('idinmueble', $inmueble)->get();
        
    }
}
