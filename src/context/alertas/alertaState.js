import React, { useReducer } from 'react';
import alertaReducer from './alertaReducer';
import alertaContext from './alertaContext';

import { MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../../types/Index';

const AlertaState = props => {
    const initialState = {
        alerta: null
    }

    //toma como parametros el reducer y el estado inicial
    const [ state, dispatch ] = useReducer(alertaReducer, initialState);

    // Funciones
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type:  MOSTRAR_ALERTA,
            payload: {
                msg, 
                categoria
            }
        });

        //despues de mstrar la alerta  la ocultara
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 5000);
    }


    return (
        <alertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        > 
            {props.children}
        </alertaContext.Provider>
    )
}

export default AlertaState;