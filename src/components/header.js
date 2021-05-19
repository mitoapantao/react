import React from "react";
import '../App.css';
import  Logo from "../assets/imagenes/favicon.png";

export default function Header() {
    return (
               <ul className="menu ol">
            <li>
            <img  className="log" src={Logo} />
            </li>
            <li>
                <a>Mac </a>
            </li>
            <li>
            <a> Ipad</a>
            </li>
            <li>
            <a>Iphone</a>
            </li>
            <li>
            <a>Watch</a>
            </li>
            <li>
            <a>TV</a>
            </li>
            <li>
            <a>Music</a>
            </li>
            <li>
            <a>Soporte</a>
            </li>
            <li>
            <a>Dónde Comprar</a>
            </li>
            <li>
                
            </li>
        </ul>
        
    )
}