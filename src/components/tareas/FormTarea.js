import React from 'react';

const FormTarea = () => {

    //Creamos 

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