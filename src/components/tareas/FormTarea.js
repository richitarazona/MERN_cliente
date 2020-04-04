import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';


const FormTarea = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Extraer si un proyecto esta aactivo

    if(!proyecto) return null;
    
    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] =  proyecto;


    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                    type="text"
                     className='input-text'
                     placeholder='Nombre Tarea....'
                     name='nombre'/>
                </div>
                >
                <div className="contenedor-input">
                    <input 
                    type="submit" 
                    value="Agregar Tarea"
                    className='btn btn-primario btn-submit btn-block'/>
                </div>

            </form>
        </div>
     );
}
 
export default FormTarea;