import React from 'react';

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <h6>Aviso legal:</h6>
                        <p className="text-justify">Las operaciones con instrumentos financieros o criptomonedas implican un elevado riesgo, incluyendo la pérdida parcial o total del capital invertido, y pueden no ser adecuadas para todos los inversores. Los precios de las criptomonedas son extremadamente volátiles y pueden verse afectados por factores externos de tipo financiero, regulatorio o político. Operar sobre márgenes aumenta los riesgos financieros.
                        Antes de lanzarse a invertir en un instrumento financiero o criptomoneda, infórmese debidamente de los riesgos y costes asociados a este tipo operaciones en los mercados financieros. Fije unos objetivos de inversión adecuados a su nivel de experiencia y su apetito por el riesgo y, siempre que sea necesario, busque asesoramiento profesional.
                        Fusion Media quiere recordarle que la información contenida en este sitio web no se ofrece necesariamente ni en tiempo real ni de forma exacta. Los datos y precios de la web no siempre proceden de operadores de mercado o bolsas, por lo que los precios podrían diferir del precio real de cualquier mercado. Son precios orientativos que en ningún caso deben utilizarse con fines bursátiles. Ni Fusion Media ni ninguno de los proveedores de los datos de esta web asumen responsabilidad alguna por las pérdidas o resultados perniciosos de sus operaciones basados en su confianza en la información contenida en la web.
                        Queda prohibida la total reproducción, modificación, transmisión o distribución de los datos publicados en este sitio web sin la autorización previa por escrito de Fusion Media y/o del proveedor de los mismos. Todos los derechos de propiedad intelectual están reservados a los proveedores y/o bolsa responsable de dichos los datos.
                        </p>
                    </div>
                </div>

                <hr />

            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p  className="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                            <a href="#"> HOLA MUNDO</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="#"> <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="" height='39' width='39' /> </a></li>
                            <li><a className="twitter" href="#"> <img src="https://cdn-icons-png.flaticon.com/512/4494/4494481.png" alt="" height='39' width='39' />  </a></li>
                            <li><a className="dribbble" href="#">  <img src="https://cdn-icons-png.flaticon.com/512/4494/4494489.png" alt="" height='39' width='39' />   </a></li>
                            <li><a className="linkedin" href="#">  <img src="https://cdn-icons-png.flaticon.com/512/4494/4494485.png" alt="" height='39' width='39' />   </a></li>   
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}