import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReduceer from './tareaReducer';


import {TAREAS_PROYECTO,AGREGAR_TAREA,VALIDAR_TAREA,ELIMINAR_TAREA,ESTADO_TAREA } from '../../types/Index';



const TareaState = props => {
    const initialState = {
        tareas: [ 
        { id:1, nombre: 'Elegir Plataforma', estado: true, proyectoId:1},
        { id:2, nombre: 'Elegir Hosting', estado: true, proyectoId:4},
        { id:3, nombre: 'Elegir Colores', estado: false, proyectoId:2},
        { id:4, nombre: 'Elegir Hosting', estado: true, proyectoId:4},
        { id:5, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId:3},
        { id:6, nombre: 'Elegir Hosting', estado: true, proyectoId:4},
        { id:7, nombre: 'Elegir Colores', estado: false, proyectoId:2},
        { id:8, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId:3},
        { id:9, nombre: 'Elegir Hosting', estado: true, proyectoId:4},
        { id:10, nombre: 'Elegir Colores', estado: false, proyectoId:3},
        { id:11, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId:1},
        { id:12, nombre: 'Elegir Hosting', estado: true, proyectoId:2},
    ],
    tareasproyecto : null,
    errortarea : false,
    };


    //creamos el didpacht y el state

const [state, dispatch] = useReducer(TareaReduceer,initialState);

    //Creamos los funciones

    //Obtenemos las tareas del proyecto
    const obtenerTareas = proyectoId => {
            dispatch({
                type:TAREAS_PROYECTO,
                payload:proyectoId
            });
    };
    //AGREAMOS TAREA AL PROYECTO SELECCIONADO
    const agregarTarea = tarea => {
            dispatch({
                type:AGREGAR_TAREA,
                payload:tarea
            });
    };
    //Validamos la tarea
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }
    //ELIMINAR TAREA POR ID
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload:id
        })
    }
    // Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }
    



return (
    <TareaContext.Provider
    value={{
        tareas:state.tareas,
        tareasproyecto : state.tareasproyecto,
        errortarea : state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea
    }}
    >
        {props.children}
    </TareaContext.Provider>
)
}
export default TareaState;