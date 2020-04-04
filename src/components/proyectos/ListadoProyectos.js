import React, {useState,useContext,useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoProyectos = () => {

    //Importamos el contexto
    const proyectosContext = useContext(proyectoContext);
    //Extrameo proyectos del state inicial
    const {proyectos,obtenerProyectos} = proyectosContext;

    // ((Obtienen proyetos cuando carga el componente))
    useEffect(() => {
        obtenerProyectos();
    }, []);
    //Revisamos si proyeczto tiene contenido
    if(proyectos.length === 0) return <p>No hay proyectos, comienza uno</p>;
 

  
    return ( 
        <ul
        className="listado-proyectos">
            {proyectos.map( proyecto => (
                <Proyecto
                proyecto={proyecto}
                key={proyecto.id}
                ></Proyecto>
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;