import React from "react";
import Header from "../../header/header";
import Navbar from "../../navbar/navbar";

import { Fragment } from "react";

import guidesCSS from "./guides.module.css";
import functionIcon from "../commonImages/function.gif"
import trigonometryIcon from "../commonImages/trigonometry.png"
import limitsIcon from "../commonImages/limits.png"
import derivativesIcon from "../commonImages/derivatives.png"
import integrationIcon from "../commonImages/integration.png"
import complexIcon from "../commonImages/complex.png"



import { HashLink as Anchor } from "react-router-hash-link";

export default function Guides(){

    return(
        <Fragment>

            <Header> </Header>
            <Navbar> </Navbar>

            <h1 className={guidesCSS.title}> Guides </h1> 

            <ul className={guidesCSS.mainList}>

                <Anchor  className={guidesCSS.item} to={"/functions#guides"}> 
                
                <h3> Functions </h3> 
                <img src={functionIcon}/>
                
                </Anchor>
                
                <Anchor  className={guidesCSS.item} to={"/trigonometry#guides"}> 

                <h3> Trigonometry </h3> 
                <img src={trigonometryIcon}/>

                </Anchor>
                
                <Anchor  className={guidesCSS.item} to={"/limits#guides"}> 
                
                <h3> Limits </h3> 
                <img src={limitsIcon}/>

                </Anchor>
                
                <Anchor  className={guidesCSS.item} to={"/derivatives#guides"}> 
                
                <h3> Derivatives </h3> 
                <img src={derivativesIcon}/>

                
                </Anchor>
                
                <Anchor  className={guidesCSS.item} to={"/integration#guides"}> 
                
                <h3> Integration </h3> 
                <img src={integrationIcon}/>

                </Anchor>
                
                <Anchor  className={guidesCSS.item} to={"/complex#guides"}> 
                
                <h3> Complex Numbers </h3> 
                <img src={complexIcon}/>

                
                </Anchor>
            </ul>

        </Fragment>
    )


}