import React from "react";

import Header from "../../header/header";
import Navbar from "../../navbar/navbar";

import { Fragment } from "react";
import probabilityCSS from "./probability.module.css";



export default function Probability(){

    return(

        <Fragment>

            <Header> </Header>
            <Navbar> </Navbar>

            <p className={probabilityCSS.textbox}>
                Probability is the branch of mathematics concerning numerical descriptions of how likely an event is to occur, 
                or how likely it is that a proposition is true. The probability of an event is a number between 0 and 1, where, 
                roughly speaking, 0 indicates impossibility of the event and 1 indicates certainty.[
            </p>

            <p className={probabilityCSS.textbox}>
                These concepts have been given an axiomatic mathematical formalization in probability theory, which is used 
                widely in areas of study such as statistics, mathematics, science, finance, gambling, artificial intelligence, 
                machine learning, computer science, and game theory to, for example, draw inferences about the expected 
                frequency of events. 
            </p>

            <h1 className={probabilityCSS.subtitle}> Main Topics </h1>

            <ul className={probabilityCSS.list}>
                <li className={probabilityCSS.item}> Random variables </li>
                <li className={probabilityCSS.item}> Conditional probability </li>
                <li className={probabilityCSS.item}> Theory of probability distributions </li>
                <li className={probabilityCSS.item}> Properties of probability distributions </li>
                <li className={probabilityCSS.item}> Applied probability </li>
                <li className={probabilityCSS.item}> Stochastic processes</li>

            </ul>
            
        </Fragment>
    )


}