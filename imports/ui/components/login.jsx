import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";





export function Login() {

    const [user, setuser] = useState('');
    const [contrase, setcontrase] = useState('');
    const [alerta, setalerta] = useState(false);
    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();

        Meteor.loginWithPassword(user, contrase, error => {
            if (error) {
                console.error('Error al iniciar sesion: ', error);
                setalerta(true);
            } else {
                setalerta(false);
                navigate("/");
            }
        });

        // if(user == "admin" && contrase=="admin"){
        //     setalerta(false);
        //     navigate("/");

        // }
        // else{
        
        //     setalerta(true);
        // }
        
    }

    const quitaralerta = () =>{
        setalerta(false);
    }

    return (
        
        <div className=''  >


                
                    
                    <div className={alerta ? "show-element" : null}>
                        {alerta && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong> Nombre de usuario o contraseña incorrectos </strong>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={quitaralerta}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>}
                    </div>  


                    <div className="centrarlogin">

                    <form className="login" onSubmit={handleSubmit}>
                        
                        <p className="title" style={{textAlign:'center'}}>PANEL DE ADMINISTRADOR</p>
                        <input type="text" placeholder="Usuario" autoFocus required  value={user}  onChange={(e) => setuser(e.target.value)}/>
                        <i className="fa fa-user"><img className='' src="https://cdn-icons-png.flaticon.com/512/3661/3661442.png" alt="" height='17' width='17'></img> </i>
                        <input type="password" placeholder="Contraseña" required value={contrase}  onChange={(e) => setcontrase(e.target.value)} />
                        <i className="fa fa-key"> <img className='' src="https://cdn-icons-png.flaticon.com/512/483/483408.png" alt="" height='17' width='17'></img> </i>
                        {/* <a href="#">¿Olvidaste tu contraseña?</a> */}
                        <button>
                        <i className="spinner"> </i>
                        <span className="state">ENTRAR</span>
                        </button>
                    </form>
                    </div>




        </div>
        
    );
}