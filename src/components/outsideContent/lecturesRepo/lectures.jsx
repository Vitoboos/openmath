import React from "react";
import Header from "../../header/header";
import Navbar from "../../navbar/navbar";

import { Fragment } from "react";

import lecturesCSS from "./lectures.module.css";

import functionIcon from "../commonImages/function.gif"
import trigonometryIcon from "../commonImages/trigonometry.png"
import limitsIcon from "../commonImages/limits.png"
import derivativesIcon from "../commonImages/derivatives.png"
import integrationIcon from "../commonImages/integration.png"
import complexIcon from "../commonImages/complex.png"

import { HashLink as Anchor } from "react-router-hash-link";

export default function Lectures(){

    return(
        <Fragment>

            <Header> </Header>
            <Navbar> </Navbar>

            <h1 className={lecturesCSS.title}> Lectures </h1> 

            <ul className={lecturesCSS.mainList}>

                <Anchor  className={lecturesCSS.item} to={"/functions#lectures"}> 
                
                <h3> Functions </h3> 
                <img src={functionIcon}/>
                
                </Anchor>
                
                <Anchor  className={lecturesCSS.item} to={"/trigonometry#lectures"}> 

                <h3> Trigonometry </h3> 
                <img src={trigonometryIcon}/>

                </Anchor>
                
                <Anchor  className={lecturesCSS.item} to={"/limits#lectures"}> 
                
                <h3> Limits </h3> 
                <img src={limitsIcon}/>

                </Anchor>
                
                <Anchor  className={lecturesCSS.item} to={"/derivatives#lectures"}> 
                
                <h3> Derivatives </h3> 
                <img src={derivativesIcon}/>

                
                </Anchor>
                
                <Anchor  className={lecturesCSS.item} to={"/integration#lectures"}> 
                
                <h3> Integration </h3> 
                <img src={integrationIcon}/>

                </Anchor>
                
                <Anchor  className={lecturesCSS.item} to={"/complex#lectures"}> 
                
                <h3> Complex Numbers </h3> 
                <img src={complexIcon}/>

                
                </Anchor>
            </ul>

        </Fragment>
    )


}