import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReduceer from './tareaReducer';


import {TAREAS_PROYECTO,AGREGAR_TAREA,VALIDAR_TAREA } from '../../types/Index';



const TareaState = props => {
    const initialState = {
        tareas: [ 
        { nombre: 'Elegir Plataforma', estado: true, proyectoId:1},
        { nombre: 'Elegir Hosting', estado: true, proyectoId:4},
        { nombre: 'Elegir Colores', estado: false, proyectoId:2},
        { nombre: 'Elegir Hosting', estado: true, proyectoId:4},
        { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId:3},
        { nombre: 'Elegir Hosting', estado: true, proyectoId:4},
        { nombre: 'Elegir Colores', estado: false, proyectoId:2},
        { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId:3},
        { nombre: 'Elegir Hosting', estado: true, proyectoId:4},
        { nombre: 'Elegir Colores', estado: false, proyectoId:3},
        { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId:1},
        { nombre: 'Elegir Hosting', estado: true, proyectoId:2},
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


return (
    <TareaContext.Provider
    value={{
        tareas:state.tareas,
        tareasproyecto : state.tareasproyecto,
        errortarea : state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea
    }}
    >
        {props.children}
    </TareaContext.Provider>
)
}
export default TareaState;