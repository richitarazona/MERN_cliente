import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
//Al ser index.js no se pone el nombre del arachivo a importar
import { FORMULARIO_PROYECTO, OBTENER_PROYECTO } from '../../types/Index';


const ProyectoState = props => {

    
    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño de Sitio web' },
        { id: 4, nombre: 'MERN '}
    ];
         const initialState = {
        proyectos : [],
        formulario : false
    }
    

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const obtenerProyectos = () => {
        dispatch({
            type:OBTENER_PROYECTO,
            payload:proyectos
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </proyectoContext.Provider>
        
    )
        }

export default ProyectoState;