<?php

namespace App\Http\Controllers;
use App\Models\Usuario;
use Illuminate\Http\Request;


class usuarioController extends Controller
{
    public function index()
    {
         // Obtener todos los usuarios de la base de datos
         $usuario = usuario::all();

         // Retornar los usuarios como respuesta
         return $usuario;
    }


    /**
     * Store  
     */
    public function store(Request $request)
    {
        $usuario = new usuario ($request->all());
        $usuario->save();
        return redirect()->action([usuarioController::class, 'index']);
    }


    /**
     * Display 
     */
    public function show(string $id)
    {
        $usuario =  usuario::find($id);
        return $usuario;
    }

    

    /**
     * Update 
     */
    public function update(Request $request, string $id)
    {
        // Buscar el usuario existente en la base de datos por su ID
    $usuario = usuario::findorfail($id);
    // Actualizar los datos del usuario con los datos del formulario
    $usuario->username = $request->input('username');
    $usuario->nombre = $request->input('nombre');
    $usuario->apellido = $request->input('apellido');
    $usuario->correo = $request->input('correo');
    $usuario->telefono = $request->input('telefono');
    $usuario->contraseña = $request->input('contraseña');
   
    // Guardar los cambios en la base de datos
    $usuario->save();

    // Retornar una respuesta de éxito
    return response()->json(['mensaje' => 'usuario actualizado con éxito'], 200);
    }

    /**
     * delete
     */
    public function destroy(string $id)
    {
        // Encuentra la categoría por su ID
        $usuario = usuario::find($id);
         // Verifica si la categoría existe
         if (!$usuario) {
            return response()->json(['mensaje' => 'usuario no encontrada'], 404);
        }

        // Realiza la eliminación
        $usuario->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'usuario eliminada'], 200);

    }
}
