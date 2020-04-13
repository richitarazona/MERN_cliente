import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axios from 'axios';

import clienteAxios from '../../config/axios';
 import tokenAuth from '../../config/token';

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
            const respuesta = await axios.post('http://localhost:4000/api/usuarios', datos);
            console.log(respuesta);
            //respuesta.data en el token
            console.log(respuesta.data);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload:respuesta.data
            });
            // Obtenemos el usuario despues de hacer el registro
             usuarioAutenticado();

        } catch (error) {
            // Accedemos a los errores de axios
            console.log(error.response.data.msg);
            const alerta = {
                msg:error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload:alerta
            })

        }
    }
        // Retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if(token) {
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');
             console.log(respuesta);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });

        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

      // Cuando el usuario inicia sesión
      const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            dispatch({
                type:LOGIN_EXITOSO,
                payload:respuesta.data
            })
           
        } catch (error) {
            console.log(error);
            const alerta = {
                // msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
        // Obtenemos el usuario despues de hacer el registro
             usuarioAutenticado();
    }


    

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                registrarUsuario,
                iniciarSesion,
              
            }}
        >{props.children}

        </AuthContext.Provider>
    )
}
export default AuthState;
