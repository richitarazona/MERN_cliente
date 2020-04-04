import React, {Fragment, useState,useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';



const NuevoProyecto  = () => {

    //Creamos state para formulario
    const proyectosContext =useContext(proyectoContext);
    const {formulario, mostrarFormulario} = proyectosContext;

    //Creamos el state para proyecto
    const [proyecto, GuardarProyecto] = useState({
        nombre:'',
    });

    //Extraer nombre del proyecto
    const { nombre } = proyecto;
    
    //Leer contenidos del input
    const onChangeProyecto = e => {
        GuardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    };

    //Cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();
        GuardarProyecto();

        //Validamo proyecto
        //agregamos si todo estsa ok
        //Reiniciar el form
    };

    return ( 
        <Fragment>
             <button
        type="button"
        onClick={mostrarFormulario}
        className="btn btn-block btn-primario">
            Nuevo Proyecto
        </button>

        { formulario?
            (
            <form 
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProyecto}
            >
                <input 
                type="text" 
                name="nombre" 
                className="input-text"
                onChange={onChangeProyecto}
                value={nombre}
                placeholder="Nombre Proyecto"/>
    
                <input 
                type="submit" 
                value="Agregar Proyecto"
                className='btn btn-primario btn-block'/>
            </form>
        )
        :null
        }


        </Fragment>
       

     );
};
 
export default NuevoProyecto;