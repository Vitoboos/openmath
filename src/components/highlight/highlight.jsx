import React from "react";

import { Fragment } from "react";

import highlightCSS from "./highlight.module.css"
import rightArrow from "./rightArrow.png"

export default function Highlight(){

    return(
        <Fragment>

    <div className={highlightCSS.highlightWrapper}>

        <section className={highlightCSS.highlight}>
            <h1 className={highlightCSS.title}> MATH CAN BE EASY! </h1> 

            <div className={highlightCSS.arrowBox}>
                <h3> We offer </h3> 
                <img src={rightArrow}/>
            </div>

            <div className={highlightCSS.offerBox}>
                <ul>
                    <li> A community </li>
                    <li> Continuous support  </li>
                    <li> Solid textbooks and study guides </li>
                </ul>
            </div>
        </section>

    </div>

        </Fragment>
    )


}