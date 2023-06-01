/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState } from 'react';

const Body = () => {
    // Creamos nuestro primer hook
    // eslint-disable-next-line no-undef, no-unused-vars
    const [servicios, agregarServicio] = useState(
        [
        { id: 1, nombre: "Consultoria", precio: 2500 },
        { id: 2, nombre: "Impuestos", precio: 2000 },
        { id: 3, nombre: "Declaraciones juradas", precio: 3500 }
        ]
    );

    return (
        <div>
            <h1>Estudio Contable CIU-UNaHur-2023</h1>
            {
                servicios.map( servicio => (
                <p>{servicio.id} | {servicio.nombre} | {servicio.precio}</p>
                ))
            }

            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm mx-1" role="status" aria-hidden="true"></span>
                Contáctenos...
            </button>

            <div className='container px-5'>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2020/04/494766.jpg" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://symcontadores.com/wp-content/uploads/2021/01/que-es-un-estudio-contable-1024x683.jpg" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.estudiorgr.com.ar/slider/estudio+contable.jpg" className="d-block w-100"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Body;