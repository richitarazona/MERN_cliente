import { FORMULARIO_PROYECTO ,OBTENER_PROYECTO,AGREGAR_PROYECTO, VALIDAR_FORMULARIO} from '../../types/Index';

export default (state, action) => {
    switch(action.type) {
        case FORMULARIO_PROYECTO:
        return{
            ...state,
            formulario:true
        }
        case OBTENER_PROYECTO:  
            return{
                ...state,
                proyectos:action.payload
            }
        case AGREGAR_PROYECTO:
            return{
                ...state,
                //Le pasamos una copia de los proyectos y añadimos el que le enviamos 
                //con el payload
                proyectos: [...state.proyectos, action.payload],
                //Reseteamos
                formulario : false,
            }
            case VALIDAR_FORMULARIO:
                return {
                    ...state,
                    errorformulario:true
                }
        default:
            return state;
    }
}