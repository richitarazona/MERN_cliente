import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
//Al ser index.js no se pone el nombre del arachivo a importar
import { FORMULARIO_PROYECTO, OBTENER_PROYECTO, AGREGAR_PROYECTO ,VALIDAR_FORMULARIO} from '../../types/Index';


const ProyectoState = props => {

    
    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño de Sitio web' },
        { id: 4, nombre: 'MERN '}
    ];
         const initialState = {
        proyectos : [],
        formulario : false,
        errorformulario:false,
    }
    

    // Dispatch para ejecutar las acciones y cambaier el estado  s
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
        });
    };
    const agregarProyecto = proyecto => {
        //Asignamos un id a cada proyecto
            proyecto.id = uuidv4();

            dispatch({
                type : AGREGAR_PROYECTO,
                //Lo que vamos a enviar (proyedto )para modificarlo 
                payload:proyecto
            });
       
    };
    // Validar formulario
    const mostrarError = () => {

            dispatch({
                type : VALIDAR_FORMULARIO,
                
            });
       
    };

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                
            }}
        >
            {props.children}
        </proyectoContext.Provider>
        
    )
        }

export default ProyectoState;