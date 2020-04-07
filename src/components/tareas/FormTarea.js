import React, {useContext, useState,useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const FormTarea = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtenemos la funcion del context de tarea y tenemos disponibles todas las tareas
    const tareasContext = useContext(tareaContext);
    const { tareaSeleccionada,agregarTarea , validarTarea ,errortarea,obtenerTareas} = tareasContext;

    //Effect que detecta si hay una tarea seleccionada

    useEffect(() => {
       if(tareaSeleccionada !== null){
           guardarTarea(tareaSeleccionada)
       }else{
           guardarTarea({
               nombre:''
           })
       }
    }, [tareaSeleccionada])

    //State del formulario
    const [tarea, guardarTarea] = useState({
        nombre:'',
    });

    //Extraemos el nombre del proyecyo
    const { nombre } = tarea;

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;
    
    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] =  proyecto;

    //Leemos los valores del foemulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value,
        })
       
        
    }
    
    
    //Agregamos las tareas
    const onSubmit = e => {
        e.preventDefault();

         //Validamos
         if(nombre.trim() === '' ) {
            validarTarea();
            return;
        }
        
        //agragamos tarea al state
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);

        //obtenemos y filtamos las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        //reiniciamps el fornm
        guardarTarea({
           nombre:'',
        })

    };


    return ( 
        <div className="formulario">
            <form
            onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                    type="text"
                     className='input-text'
                     placeholder='Nombre Tarea....'
                     onChange={handleChange}
                     value= {nombre}
                     name='nombre'/>
                </div>
                >
                <div className="contenedor-input">
                    <input 
                    type="submit" 
                    
                    value={tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    className='btn btn-primario btn-submit btn-block'/>
                </div>
                {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null }
            </form>
        </div>
     );
}
 
export default FormTarea;