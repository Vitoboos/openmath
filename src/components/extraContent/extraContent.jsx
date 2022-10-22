import React from "react";
import Header from "../header/header"
import Navbar from "../navbar/navbar";
import extraCSS from "./extraContent.module.css"

import { Fragment } from "react";

export default function Extra(){

    return(
        <Fragment>

            <Header> </Header>
            <Navbar> </Navbar>

            <h1 className={extraCSS.mainTitle}> More Content </h1> 
            
            <div className={extraCSS.mainList}>

                <div className={extraCSS.itemList}>
                    <h1 className={extraCSS.subtitle}> Multivariable Calculus </h1>

                    <div className={extraCSS.topic}>
                        <h2> Partial Derivatives </h2>
                    </div>

                    <div className={extraCSS.topic}>
                        <h2> Double Integrals </h2>
                    </div>

                    <div className={extraCSS.topic}>
                        <h2> Triple Integrals </h2>
                    </div>


                </div>

                <div className={extraCSS.itemList}>
                    <h1 className={extraCSS.subtitle}> Probability Theory </h1>

                    <div className={extraCSS.topic}>
                        <h2> Probability  </h2>
                    </div>

                    <div className={extraCSS.topic}>
                        <h2> Random variables  </h2>
                    </div>
                    
                    <div className={extraCSS.topic}>
                        <h2> Sampling distribution  </h2>
                    </div>

                    <div className={extraCSS.topic}>
                        <h2> Confidence intervals  </h2>
                    </div>
                </div>

            </div>

        </Fragment>
    )


}