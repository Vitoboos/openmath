import React from "react";
import Header from "../../header/header";
import Navbar from "../../navbar/navbar";

import functionsCSS from "./derivatives.module.css";
import topicIcon from "./derivatives.png"

import videoIcon from "../commonImages/youtube.png"
import sheetIcon from "../commonImages/sheet.png"

import { Fragment } from "react";

import Axios from "axios";
import fileDownload from "js-file-download";

const download=(e)=>{
    e.preventDefault()

    Axios({
        url:'http://localhost:3000',
        method:"GET",
        responseType:'blob'

    }).then((res)=>{
        console.log(res)
        fileDownload(res.data, "sample.pdf")
    })

}


export default function Derivates(){

    function goToVideo(){
        window.open('https://www.youtube.com/watch?v=NpEaa2P7qZI')
    }

    return(
        <Fragment>

            <Header> </Header>
            <Navbar> </Navbar>

<section>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Derivatives </h1> 

<div className={functionsCSS.summaryBox}>
    
    <div className={functionsCSS.textBox}>

        <p> 
            Derivative, in mathematics is the rate of change of a function with respect to a variable. 
            Derivatives are fundamental to the solution of problems in calculus and differential equations. 
            In general, scientists observe changing systems (dynamical systems) to obtain the rate of change of some 
            variable of interest.
        </p>

    </div>

    <img src={topicIcon}/>


</div>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Lectures </h1> 

<div className={functionsCSS.lectures} id="lectures"> 

    <h2> Introduction </h2>

    <div className={functionsCSS.item}>
        <h4> What is a derivative? </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 14:00 </h4>
    </div>

    <h2> Chapter 1 </h2>

    <div className={functionsCSS.item}>
        <h4> Formal definition of derivatives  </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 20:49 </h4>
    </div>

    <h2> Chapter 2 </h2>

    <div className={functionsCSS.item}>
        <h4> Estimating derivatives </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 25:13 </h4>
    </div>

    <h2> Chapter 3 </h2>

    <div className={functionsCSS.item}>
        <h4> Pifferentiability </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 20:25 </h4>
    </div>

    <h2> Chapter 4 </h2>

    <div className={functionsCSS.item}>
        <h4> Differentiation rules </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 50:21 </h4>
    </div>

    <h2> Chapter 5 </h2>

    <div className={functionsCSS.item}>
        <h4> Chain rule </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 35:45 </h4>
    </div>

    <h2> Chapter 6 </h2>

    <div className={functionsCSS.item}>
        <h4> Optimization </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 40:23 </h4>
    </div>

</div>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Guides </h1> 

<div className={functionsCSS.guides}  id="guides">
    
    <div className={functionsCSS.item}>
        <h3> Newcomer </h3>

        <div className={functionsCSS.list}>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Derivatives by definition  </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Differentiation Guide #1  </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Optimization Guide #1  </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

        </div>
    </div>

                
    <div className={functionsCSS.item}>
        <h3> Intermediate </h3>

        <div className={functionsCSS.list}>

            <div className={functionsCSS.piece}>
                <p onClick={download}>  Differentiation Guide #2</p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}>  Differentiation Guide #3</p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Optimization Guide #2 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

        </div>
    </div>

    
    <div className={functionsCSS.item}>
        <h3> Challenging </h3>

        <div className={functionsCSS.list}>

            <div className={functionsCSS.piece}>
                <p onClick={download}>  Differentiation Guide #4 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}>  Optimization Guide #3 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

        </div>

    </div>

</div>


<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Study Sheets </h1> 

<div className={functionsCSS.sheetBox}>
    
    <div className={functionsCSS.item}>
        <h1> Theory </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

    <div className={functionsCSS.item}>
        <h1> Properties </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

    <div className={functionsCSS.item}>
        <h1> Derivatives </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

    <div className={functionsCSS.item}>
        <h1> Chain Rule </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

</div>




</section>


        </Fragment>
    )


}