import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clienteAxios from '../../config/axios';
// import tokenAuth from '../../config/token';

import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types/Index';

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null, 
        mensaje: null, 
        cargando: true
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);
    //En 'datos' vienen  nombre, usuario y password que pasaremso a la API
    const registrarUsuario = async datos =>{
       
        try {
            //Hacemos una peticion  POST a nuestra url/api/usuarios y le enviamos 'datos'
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            console.log(respuesta);
            //respuesta.data en el token
            console.log(respuesta.data);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload:respuesta.data
            })

        } catch (error) {
            console.log(error);

            dispatch({
                type: REGISTRO_ERROR
            })

        }

    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                registrarUsuario
              
            }}
        >{props.children}

        </AuthContext.Provider>
    )
}
export default AuthState;
