import React from "react";
import './Card.css';
import cardIcon1 from './iconcard1.png';
import cardIcon2 from './iconcard2.png';
import cardIcon3 from './iconcard3.png';
import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        
            <div className="card cards-container-bg col-md-3 col-11">
                <div className="content">
                    <div className="imgBx">
                        <img src={props.cardimage} /> {/* COMO COLOCO OUTRAS IMAGENS AQUI*/}
                    </div>
                    <div className="contentBx">
                        <h3 className="card-text-size">{props.cardName}</h3>
                    </div>
                </div>
                <ul className="sci">
                    <li>
                        <Link to={props.to} className="style-hover-card">Cadastre-se</Link>
                    </li>
                </ul>
            </div>

    )

}