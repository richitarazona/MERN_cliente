
import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERRROR,
    CERRAR_SESION
} from '../../types/Index';

export default (state, action) => {
    switch(action.type) {
        //En nuestra api Crear usuario nos genera un token
        //utilizaremos esta como payload
        case REGISTRO_EXITOSO:
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                autenticado:true,
                mensaje: null,
            }
        case REGISTRO_ERROR:
            return{
                ...state,
                token:null,
                mensaje:action.payload
            }
       
      
        default:
            return state;

    }
};