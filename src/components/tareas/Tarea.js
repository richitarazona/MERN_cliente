import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

import tareaContext from '../../context/tareas/tareaContext';




const Tarea = ({tarea}) => {


    //Obtenemos la funcion del context de tarea y tenemos disponibles todas las tareas
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea,obtenerTareas,cambiarEstadoTarea} = tareasContext;

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //extraemos el proyecto
    const [proyectoActual] = proyecto;

    //Funcion que elimina la tarea cuando hace click
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    const cambiarEstado = tarea => {
        if(tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true
        }
        cambiarEstadoTarea(tarea);
    }

    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre} </p>

            <div className="estado">
                {tarea.estado 
                ?  
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => cambiarEstado(tarea)}
                        >Completo</button>
                    )
                : 
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => cambiarEstado(tarea)}                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button 
                    type="button"
                    className="btn btn-primario"
                >Editar</button>

                <button
                    type="button"
                    onClick={ () => tareaEliminar(tarea.id)}
                    className="btn btn-secundario"
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;