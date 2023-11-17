<?php

namespace App\Http\Controllers;
use App\Models\favorito;
use Illuminate\Http\Request;

class favoritoController extends Controller
{
    public function index($userID)
    {
        try {
            // Obtener los favoritos filtrados por el ID del usuario
            
    
$favoritos = Favorito::where('idusuario', $userID)->get();

            if ($favoritos->isEmpty()) {
                
               
return response()->json(['message' => 'No se encontraron favoritos para este usuario'], 404);
            }

            return $favoritos;
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error al obtener favoritos: ' . $e->getMessage()], 500);
        }
    }
   
      
   
        // Método para agregar un favorito
        
        
        public function store(Request $request)
{
    try {
        $idinmueble = $request->input('idinmueble');
        $idusuario = $request->input('idusuario');
        
        // Verificar si ya existe un favorito con el mismo idinmueble y idusuario
        $existingFavorite = Favorito::where('idinmueble', $idinmueble)
            ->where('idusuario', $idusuario)
            ->first();
        
        if ($existingFavorite) {
            return response()->json(['message' => 'El inmueble ya está en favoritos'], 400);
        }
        
        // Si no existe, se puede agregar como un nuevo favorito
        $favorito = new Favorito();
        $favorito->idinmueble = $idinmueble;
        $favorito->idusuario = $idusuario;
        $favorito->save();
        
        return response()->json(['message' => 'Favorito agregado con éxito']);
    } catch (\Exception $e) {
        return response()->json(['message' => 'Error al agregar favorito: ' . $e->getMessage()], 500);
    }
}




    /**
     * Display 
     */
    public function show(string $idfav)
    {
        $favorito =  favorito::find($idfav);
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
    public function destroy($userID, $sitioID)
    {
        try {
            $favorito = Favorito::where('idusuario', $userID)
                                ->where('idinmueble', $sitioID)
                                ->first();

            if ($favorito) {
                $favorito->delete();
                return response()->json(['message' => 'Favorito eliminado correctamente'], 200);
            } else {
                return response()->json(['error' => 'El favorito no existe'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'No se pudo eliminar el favorito'], 500);
        }
    }
}
