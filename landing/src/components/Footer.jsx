import React from 'react';

const Footer = ({redsocial}) => {
    // Acá va el codigo js necesario
    // calculamos el año corriente
    const fecha = new Date().getFullYear();
    return (
        <div className="App-footer">
            <div class="container">              
                <p>Construcción de Interfáces de Usuario - UNaHur</p>
                <p>Todo el contenido es utilizado con fínes didácticos</p>
                <p>Mauricio Pintos - © {fecha} Todos los derechos reservados</p>
                <p>Visita nuestra red social: {redsocial}</p>
            
                {/* Datos de contacto */}
                <h4>Contacto</h4>
                <ul class="list-inline">
                    <li class="list-inline-item"><i class="fas fa-envelope"></i> <a href="mailto:gestionestudiantil@unahur.edu.ar">gestionestudiantil@unahur.edu.ar</a></li>
                    <li class="list-inline-item"><i class="fab fa-whatsapp"></i> <a href="https://wa.me/5491120785200">(+54) 11 2078-5200</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;