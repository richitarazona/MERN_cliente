import { FORMULARIO_PROYECTO ,OBTENER_PROYECTO,AGREGAR_PROYECTO, VALIDAR_FORMULARIO,PROYECTO_ACTUAL, ELIMINAR_PROYECTO} from '../../types/Index';

export default (state, action) => {
    switch(action.type) {
        case FORMULARIO_PROYECTO:
        return{
            ...state,
            formulario:true,
            
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
                errorformulario:false,
            }
            case VALIDAR_FORMULARIO:
                return {
                    ...state,
                    errorformulario:true
                }
            case PROYECTO_ACTUAL:
                return {
                    ...state,
                    proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload)
                }
            case ELIMINAR_PROYECTO:
                return {
                    ...state,
                    //Filtra y trae todos menos los de ese ID
                    proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload),
                    proyecto : null

                }
        default:
            return state;
    }
}