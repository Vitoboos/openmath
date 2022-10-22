import React from "react";

import { Fragment } from "react";

import mainLogo from "./lifesaver.png"
import headerCSS from "./header.module.css"

import {NavLink} from "react-router-dom";


export default function Header(){

    return(
        <Fragment>

    <div className={headerCSS.headerWrapper}>
        <header> 
            <img src={mainLogo}/>  

            <NavLink to={"/"}>
                <h1> Calculus Lifesaver </h1>
            </NavLink>

        </header>
    </div>

        </Fragment>
    )


}