import React from "react";

import Header from "../../header/header";
import Navbar from "../../navbar/navbar";

import { Fragment } from "react";
import calculusCSS from "./calculus.module.css";

export default function Calculus(){

    return(

        <Fragment>

            <Header> </Header>
            <Navbar> </Navbar>

        <p className={calculusCSS.textbox}>
            Calculus, originally called infinitesimal calculus or "the calculus of infinitesimals", is the mathematical 
            study of continuous change, in the same way that geometry is the study of shape, and algebra is the study of 
            generalizations of arithmetic operations.
        </p>

        <p className={calculusCSS.textbox}>
            It has two major branches, differential calculus and integral calculus; differential calculus concerns instantaneous 
            rates of change, and the slopes of curves, while integral calculus concerns accumulation of quantities, and areas under 
            or between curves. These two branches are related to each other by the fundamental theorem of calculus, and they make 
            use of the fundamental notions of convergence of infinite sequences and infinite series to a well-defined limit
        </p>
        
        <h1 className={calculusCSS.subtitle}> Main Topics </h1>

        <ul className={calculusCSS.list}>
            <li className={calculusCSS.item}> Derivatives </li>
            <li className={calculusCSS.item}> Integration </li>
        </ul>

        </Fragment>
    )


}