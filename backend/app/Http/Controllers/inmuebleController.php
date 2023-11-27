<?php

namespace App\Http\Controllers;
use App\Models\Inmueble;
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
         // Buscar el inmueble existente en la base de datos por su ID
         $inmueble = inmueble::findorfail($id);
         // Actualizar los datos del inmueble con los datos del formulario
         $inmueble->tipopropiedad = $request->input('tipopropiedad');
         $inmueble->tituloanuncio = $request->input('tituloanuncio');
         $inmueble->descripcion = $request->input('descripcion');
         $inmueble->ubicacion = $request->input('ubicacion');
         $inmueble->precio = $request->input('precio');
         $inmueble->capacidad = $request->input('capacidad');
         $inmueble->habitaciones = $request->input('habitaciones');
         $inmueble->baños = $request->input('baños');
         $inmueble->camas = $request->input('camas');
         $inmueble->niños = $request->input('niños');
         $inmueble->normas = $request->input('normas');
         $inmueble->mascotas = $request->input('mascotas');
         $inmueble->qr = $request->input('qr');
         $inmueble->ciudad = $request->input('ciudad');
         $inmueble->wifi = $request->input('wifi');
         $inmueble->parqueo = $request->input('parqueo');
         $inmueble->cocina = $request->input('cocina');
         $inmueble->refrigerador = $request->input('refrigerador');
         $inmueble->lavaropa = $request->input('lavaropa');
         $inmueble->piscina = $request->input('piscina');
         $inmueble->privado = $request->input('privado');
         $inmueble->compartido = $request->input('compartido');
         $inmueble->estado = $request->input('estado');
         $inmueble->contacto = $request->input('contacto');   
         $inmueble->favorito = $request->input('favorito');  
         $inmueble->imagen1 = $request->input('imagen1');  
         $inmueble->descripcion1 =$request->input('descripcion1');  
         $inmueble->imagen2 = $request->input('imagen2');  
         $inmueble->descripcion2 =$request->input('descripcion2');  
         $inmueble->imagen3 = $request->input('imagen3');  
         $inmueble->descripcion3 =$request->input('descripcion3');  
         $inmueble->imagen4 = $request->input('imagen4');  
         $inmueble->descripcion4 =$request->input('descripcion4');  
         $inmueble->imagen5 = $request->input('imagen5');  
         $inmueble->descripcion5 =$request->input('descripcion5');  
         $inmueble->latitud = $request->input('latitud');  
         $inmueble->longitud= $request->input('longitud');  
         $inmueble->pausado= $request->input('pausado');  
         $inmueble->fechainicio= $request->input('fechainicio');  
         $inmueble->fechafin= $request->input('fechafin');  

         // Guardar los cambios en la base de datos
         $inmueble->save();
     
         // Retornar una respuesta de éxito
         return response()->json(['mensaje' => 'inmueble actualizado con éxito'], 200);
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

    public function getInmuebleDetails($inmuebleID)
{
    // Lógica para obtener los detalles del inmueble con el ID proporcionado
    $inmueble = Inmueble::find($inmuebleID);

    if ($inmueble) {
        // Si se encuentra el inmueble, devuelve los detalles en formato JSON
        return response()->json($inmueble);
    } else {
        // Si no se encuentra el inmueble, devuelve una respuesta con estado 404
        return response()->json(['error' => 'Inmueble no encontrado'], 404);
    }
}
}
