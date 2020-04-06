import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const Proyecto = ({proyecto}) => {

    //Obtenemos el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    //Obtenemos la funcion del context de tarea y tenemos disponibles todas las tareas
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas} = tareasContext;

    //Funcion para agregar el proyecto ACTUAL
     const seleccionarProyecto = id => {
            proyectoActual(id);//Fijamos proyecto actual
            obtenerTareas(id);//Filtarmos las tares
        }

    return ( 
        <li>
            <button 
            type="button"
            className="btn btn-blank"
            onClick={ () => seleccionarProyecto(proyecto.id)}
            >{proyecto.nombre}
            </button>
        </li>
     );
}
 
export default Proyecto;