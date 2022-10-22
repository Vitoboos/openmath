import React, { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import roadmapCSS from "./roadmap.module.css"
import calcMap from "./roadmapCalculusAlt.png"
import multiMap from "./roadmapMultivariableAlt.png"
import probMap from "./roadmapProbabilityAlt.png"

export default function Roadmap(){

    const [tabState1, setTabState1] = useState(false)
    const [tabState2, setTabState2] = useState(false)
    const [tabState3, setTabState3] = useState(false)

    function handleCalculus(){
        setTabState1(tabState1 => !tabState1)

        setTabState2(tabState2 => false)
        setTabState3(tabState3 => false)

    }

    function handleMulti(){
        setTabState2(tabState2 => !tabState2)

        setTabState1(tabState1 => false)
        setTabState3(tabState3 => false)
    }

    function handleTheory(){
        setTabState3(tabState3 => !tabState3)

        setTabState1(tabState1 => false)
        setTabState2(tabState2 => false)
    }

    let toggleTab1 = tabState1 ? roadmapCSS.active: ''
    let toggleTab2 = tabState2 ? roadmapCSS.active: ''
    let toggleTab3 = tabState3 ? roadmapCSS.active: ''


    return(

        <Fragment>

<h1 className={roadmapCSS.roadmapTitle}> The Calculus Roadmap </h1>


<section className={roadmapCSS.roadmapBox}>

    <div className={roadmapCSS.navBox}> 
        <ul id="buttonNav">
            <li id="slideTab1"  className={toggleTab1} onClick={handleCalculus}> Calculus </li>
            <li id="slideTab2"  className={toggleTab2} onClick={handleMulti}> Multivariable Calculus </li>
            <li id="slideTab3"  className={toggleTab3} onClick={handleTheory}> Probability Theory  </li>
        </ul>
    </div>

    <div id="slideBox">
        <div className={`base-input-class ${roadmapCSS.item} ${toggleTab1}`} id="slide1">
            <img src={calcMap} className={roadmapCSS.roadmap}/>
            <Link to={"/calculus"}>
                <button> Explore Calculus </button>
            </Link>
        </div>

        <div className={`base-input-class ${roadmapCSS.item} ${toggleTab2}`} id="slide2">
            <img src={multiMap} className={roadmapCSS.roadmap}/>
            <Link to={"/multicalculus"}>
                <button> Explore Multivariable Calculus </button>
            </Link>
        </div>

        <div className={`base-input-class ${roadmapCSS.item} ${toggleTab3}`}  id="slide3">
            <img src={probMap} className={roadmapCSS.roadmap}/>
            <Link to={"/probability"}>
                <button> Explore Probability Theory </button>
            </Link>
        </div>
    </div>

</section>

        </Fragment>
    
    )}