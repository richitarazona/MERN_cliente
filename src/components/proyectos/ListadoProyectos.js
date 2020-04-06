import React, {useState,useContext,useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


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
             <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto.id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto 
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;