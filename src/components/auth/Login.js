import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 

const Login = () => {

    //state para crear sesion
   const [usuario, guardarUsuario] = useState({
       email:'',
       password:''
   });
   //Extreamos de usuario
   const {email, password} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value

        })
    };

    //Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();
       
        //validar
        
        //Pasarlo al action
    };


    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>

                <form 
                onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="">Email:</label>
                        <input type="email" name="email" 
                        placeholder='Escribe tu email'
                        onChange={onChange}
                        value={email}
                        id="email"/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="">Password:</label>
                        <input type="password" 
                        name="password" 
                        placeholder='Escribe tu password'
                        onChange={onChange}
                        value={password}
                        id="password"/>
                    </div>
                    {/* Validamos con ExpressValidator */}
                    <div className="campo-form">
                        <input 
                        type="submit" 
                        className="btn btn-primario btn-block"
                        value="Iniciar Sesion"/>
                    </div>
                </form>

                <Link
                 to={'/nueva-cuenta'}
                className='enlace-cuenta'>
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;