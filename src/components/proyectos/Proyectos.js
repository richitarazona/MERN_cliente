import React from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';

const Proyectos = () => {
    return ( 
        <div className="contenedor-app">
           <Sidebar></Sidebar>
            <div className="seccion-principal">
                <Barra></Barra>
                <main>
                    <FormTarea></FormTarea>
                    <div className="contenedor-tarea">
                        <ListadoTareas></ListadoTareas>
                    </div>
                </main>

            </div>
        </div>
     );
}
 
export default Proyectos;