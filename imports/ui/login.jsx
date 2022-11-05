import React from 'react';


export function Login({noticias}) {
    return (
        
        <div>


                    <div class="container">
                    <form class="login">
                        <p class="title">PANEL DE ADMINISTRADOR</p>
                        <input type="text" placeholder="Username" autofocus required/>
                        <i class="fa fa-user"><img className='' src="https://cdn-icons-png.flaticon.com/512/3661/3661442.png" alt="" height='17' width='17'></img> </i>
                        <input type="password" placeholder="Password" required/>
                        <i class="fa fa-key"> <img className='' src="https://cdn-icons-png.flaticon.com/512/483/483408.png" alt="" height='17' width='17'></img> </i>
                        {/* <a href="#">¿Olvidaste tu contraseña?</a> */}
                        <button>
                        <i class="spinner"> </i>
                        <span class="state">Log in</span>
                        </button>
                    </form>
                    </div>


        </div>
        
    );
}