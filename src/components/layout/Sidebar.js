import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyectos from '../proyectos/ListadoProyectos';



const Sidebar = () => {
    return ( 
        <aside>
        <h1>MERN<span>Tasks</span></h1>
        <NuevoProyecto></NuevoProyecto>
        <div className="proyectos">
            <ListadoProyectos></ListadoProyectos>
        </div>
        </aside>
     );
}
 
export default Sidebar;