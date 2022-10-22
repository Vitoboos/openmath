import React from "react";
import Header from "../../header/header";
import Navbar from "../../navbar/navbar";

import functionsCSS from "./complex.module.css";
import topicIcon from "./complex.png"

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


export default function Complex(){

    function goToVideo(){
        window.open('https://www.youtube.com/watch?v=NpEaa2P7qZI')
    }

    return(
        <Fragment>

            <Header> </Header>
            <Navbar> </Navbar>

<section>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Complex Numbers </h1> 

<div className={functionsCSS.summaryBox}>
    
    <div className={functionsCSS.textBox}>

        <p> 
            Complex numbers are numbers that consist of two parts — a real number and an imaginary number. 
            The standard format for complex numbers is a + bi, with the real number first and the imaginary number last. 
            Because either part could be 0, technically any real number or imaginary number can be considered a complex number.
        </p>

    </div>

    <img src={topicIcon}/>


</div>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Lectures  </h1> 

<div className={functionsCSS.lectures} id="lectures"> 

    <h2> Introduction </h2>

    <div className={functionsCSS.item}>
        <h4> What is a complex number? </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 9:41 </h4>
    </div>

    <h2> Chapter 1 </h2>

    <div className={functionsCSS.item}>
        <h4> Operations with complex numbers  </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 33:11 </h4>
    </div>

    <h2> Chapter 2 </h2>

    <div className={functionsCSS.item}>
        <h4> Complex plane </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 31:37 </h4>
    </div>

    <h2> Chapter 3 </h2>

    <div className={functionsCSS.item}>
        <h4> Absolute value of complex numbers </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 12:40 </h4>
    </div>

    <h2> Chapter 4 </h2>

    <div className={functionsCSS.item}>
        <h4> polar forms of complex numbers </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 32:54 </h4>
    </div>


</div>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Guides </h1> 


<div className={functionsCSS.guides}>
    
    <div className={functionsCSS.item}>
        <h3> Newcomer </h3>

        <div className={functionsCSS.list}  id="guides">

            <div className={functionsCSS.piece}>
                <p onClick={download}> Complex Operations #1 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Complex plane Guide #1 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> polar Forms of Complex Numbers Guide #1 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

        </div>
    </div>

                
    <div className={functionsCSS.item}>
        <h3> Intermediate </h3>

        <div className={functionsCSS.list}>
            <div className={functionsCSS.piece}>
                <p onClick={download}> Complex Operations #2 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Complex plane Guide #2 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> polar Forms of Complex Numbers Guide #2 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

        </div>
    </div>

    
    <div className={functionsCSS.item}>
        <h3> Challenging </h3>

        <div className={functionsCSS.list}>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Complex Operations #3 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Complex plane Guide #3 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Polar Forms of Complex Numbers Guide #3 </p>
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
        <h1> Operations  </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

    <div className={functionsCSS.item}>
        <h1> polar Conversions </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

</div>


</section>

        </Fragment>
    )


}