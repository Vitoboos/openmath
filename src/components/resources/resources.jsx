import React from "react";

import { Fragment } from "react";

import resourcesCSS from "./resources.module.css"
import  studyIcon from "./document.png"
import  lectureIcon from "./video.png"
import  discordIcon from "./discord.png"
import { NavLink } from "react-router-dom";


export default function Resources(){

    return(

        <Fragment>

    <div className= {resourcesCSS.resourcesWrapper}>

    <section className={resourcesCSS.wavesDivider}>
        <h1 className={resourcesCSS.title}> Resources </h1>
        <div className={resourcesCSS.customShapeDividerTop}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={resourcesCSS.shapeFill}></path>
            </svg>
        </div>
    </section>

    {/* <!--  SEPARATOR  --> */}

    <section className={resourcesCSS.featureGrid}>

        <ul> 
            <li> 
                <h3> Study Guides </h3> 
                <NavLink to={"/guides"}>
                    <img className={resourcesCSS.featureIcon} src={studyIcon}/> 
                </NavLink>
                <p> Regular updates and support! </p>
            </li>
            <li> 
                <h3> Lectures </h3>  
                <NavLink to={"/lectures"}>
                    <img className={resourcesCSS.featureIcon} src={lectureIcon}/> 
                </NavLink>
                <p> Free video lectures! </p>
            </li>
            <li> 
                <h3> Study Groups  </h3>

                <NavLink to={"/discord"}>
                    <img className={resourcesCSS.featureIcon} src={discordIcon}/> 
                </NavLink>

                <p> Join our discord! </p>

            </li> 
        </ul>

    </section>

    </div>

    {/* <!-- SEPARATOR  --> */}

    <div className={resourcesCSS.customShapeDividerTopCurves}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className={resourcesCSS.shapeFill}></path>
        </svg>
    </div>

        </Fragment>

    )

}