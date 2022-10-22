import React from "react";
import Header from "../../header/header";
import Navbar from "../../navbar/navbar";

import functionsCSS from "./integration.module.css";
import topicIcon from "./integration.png"

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


export default function Integration(){

    function goToVideo(){
        window.open('https://www.youtube.com/watch?v=NpEaa2P7qZI')
    }

    return(
        <Fragment>

            <Header> </Header>
            <Navbar> </Navbar>

            <section>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Integration </h1> 

<div class={functionsCSS.summaryBox}>
    
    <div class={functionsCSS.textBox}>

        <p> 
            In mathematics, an integral assigns numbers to functions in a way that describes displacement, area, volume, and other 
            concepts that arise by combining infinitesimal data. The process of finding integrals is called integration. Along with 
            differentiation, integration is a fundamental, essential operation of calculus.
        </p>

    </div>

    <img src={topicIcon}/>


</div>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Lectures </h1> 

<div class={functionsCSS.lectures} id="lectures"> 

    <h2> Introduction </h2>

    <div class={functionsCSS.item}>
        <h4> What is a Integral? </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 15:17 </h4>
    </div>

    <h2> Chapter 1 </h2>

    <div class={functionsCSS.item}>
        <h4> Integration Rules </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 36:51 </h4>
    </div>

    <h2> Chapter 2 </h2>

    <div class={functionsCSS.item}>
        <h4> Resolution Methods I </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 30:40 </h4>
    </div>

    <h2> Chapter 3 </h2>

    <div class={functionsCSS.item}>
        <h4> Resolution Methods II </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 30:55 </h4>
    </div>

    <h2> Chapter 4 </h2>

    <div class={functionsCSS.item}>
        <h4> Definite Integrals </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 25:24 </h4>
    </div>

    <h2> Chapter 5 </h2>

    <div class={functionsCSS.item}>
        <h4> Indefinite Integrals</h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 28:12 </h4>
    </div>

    <h2> Chapter 6 </h2>

    <div class={functionsCSS.item}>
        <h4> Improper Integrals</h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 32:21 </h4>
    </div>

    <h2> Chapter 7 </h2>

    <div class={functionsCSS.item}>
        <h4> Riemman Sums </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 26:48 </h4>
    </div>


</div>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Guides </h1> 

<div class={functionsCSS.guides}  id="guides">
    
    <div class={functionsCSS.item}>
        <h3> Newcomer </h3>

        <div class={functionsCSS.list}>

            <div class={functionsCSS.piece}>
                <p onClick={download}> Definite Integrals </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div class={functionsCSS.piece}>
                <p onClick={download}> Indefinite Integrals  </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div class={functionsCSS.piece}>
                <p onClick={download}> Improper Integrals  </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div class={functionsCSS.piece}>
                <p onClick={download}> Riemman Sums #1 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div class={functionsCSS.piece}>
                <p onClick={download}> Areas by Integration #1  </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

        </div>
    </div>

                
    <div class={functionsCSS.item}>
        <h3> Intermediate </h3>

        <div class={functionsCSS.list}>

            <div class={functionsCSS.piece}>
                <p onClick={download}> Integration Guide #1 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div class={functionsCSS.piece}>
                <p onClick={download}> Integration Guide #2  </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div class={functionsCSS.piece}>
                <p onClick={download}> Riemman Sums #2 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div class={functionsCSS.piece}>
                <p onClick={download}>  Areas by Integration #2 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

        </div>
    </div>

    
    <div class={functionsCSS.item}>
        <h3> Challenging </h3>

        <div class={functionsCSS.list}>

            <div class={functionsCSS.piece}>
                <p onClick={download}> Integration Guide #3 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div class={functionsCSS.piece}>
                <p onClick={download}> Areas by Integration #3 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

        </div>

    </div>

</div>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Study Guides </h1> 

<div class={functionsCSS.sheetBox}>
    
    <div class={functionsCSS.item}>
        <h1> Theory </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

    <div class={functionsCSS.item}>
        <h1> Theorems </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

    <div class={functionsCSS.item}>
        <h1> properties </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

    <div class={functionsCSS.item}>
        <h1> Integrals  </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

</div>


</section>


            

        </Fragment>
    )


}