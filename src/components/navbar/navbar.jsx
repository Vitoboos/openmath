import React from "react";

import { Fragment } from "react";

import navbarCSS from "./navbar.module.css"

import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";

import Functions from "../subjects/functions/functions";
import Trigonometry from "../subjects/trigonometry/trigonometry";

export default function Navbar(){

    return(
        <Fragment>
    <nav>

            <ul>
                <NavLink to={"/functions"}  className={`base-input-class ${navbarCSS.item} ${navbarCSS.color1}`} activeClassName="active">
                    Functions 
                </NavLink>

                <NavLink to={"/trigonometry"}  className={`base-input-class ${navbarCSS.item} ${navbarCSS.color2}`} activeClassName="active">
                    Trigonometry 
                </NavLink>

                <NavLink to={"/limits"}  className={`base-input-class ${navbarCSS.item} ${navbarCSS.color3}`} activeClassName="active">
                    Limits 
                </NavLink>

                
                <NavLink to={"/derivatives"}  className={`base-input-class ${navbarCSS.item} ${navbarCSS.color4}`} activeClassName="active">
                    Derivatives 
                </NavLink>
        
                <NavLink to={"/integration"}  className={`base-input-class ${navbarCSS.item} ${navbarCSS.color5}`} activeClassName="active">
                    Integration 
                </NavLink>

                <NavLink to={"/complex"}  className={`base-input-class ${navbarCSS.item} ${navbarCSS.color6}`} activeClassName="active">
                    Complex Numbers  
                </NavLink>

                <NavLink to={"/extra"}  className={`base-input-class ${navbarCSS.item} ${navbarCSS.color7}`} activeClassName="active">
                More Content
                </NavLink>

            </ul>


    </nav>
        </Fragment>
    )


}