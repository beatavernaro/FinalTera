import React from "react";
import './Button.css';
import mainImage from './main-img-woman.png';

export default function Lading(props) {
    return (
        <div class="col-12 pt-4 ">
            <button type={props.type} onClick={props.onClick} className="btn-send btn fs-5 px-4 py-2" id="button-send">{props.text}</button>
        </div>
    )

}