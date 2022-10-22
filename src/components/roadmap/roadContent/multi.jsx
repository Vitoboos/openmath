import React from "react";

import Header from "../../header/header";
import Navbar from "../../navbar/navbar";

import { Fragment } from "react";
import multiCSS from "./multi.module.css";


export default function MultiCalculus(){

    return(

        <Fragment>

            <Header> </Header>
            <Navbar> </Navbar>

            <p className={multiCSS.textbox}>
                Multivariable calculus (also known as multivariate calculus) is the extension of calculus in one 
                variable to calculus with functions of several variables: the differentiation and integration of functions 
                involving several variables, rather than just one.
            </p>

        <h1 className={multiCSS.subtitle}> Main Topics </h1>

        <ul className={multiCSS.list}>
            <li className={multiCSS.item}> Partial differentiation </li>
            <li className={multiCSS.item}> Multiple integration </li>
        </ul>

        </Fragment>
    )


}