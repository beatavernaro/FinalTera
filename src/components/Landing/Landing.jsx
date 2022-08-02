import React from "react";
import './Landing.css';
import mainImage from './main-img-woman.png';

export default function Lading(){ 
    return (
        <section className="main-bg-color border-color">
            <div className="container col-xxl-8 px-4 pb-0">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={mainImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
                            width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6 text-color">
                        <h1 className="display-5 fw-bold lh-1 mb-5 pt-3 animate__animated animate__fadeIn">Venha fazer parte da comunidade Technelas
                        </h1>
                        <p className="lead mb-5">Juntas trabalhamos para aumentar o número de mulheres no mercado de tecnologia, lutamos por equidade salarial e ambientes de trabalho seguros e saudáveis</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-lg px-4 me-md-2 w-75 py-3"
                                id="btn-action" href="#">Faça parte
                                dessa
                                mudança</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}