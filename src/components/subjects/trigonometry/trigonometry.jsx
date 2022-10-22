import React from "react";
import Header from "../../header/header";
import Navbar from "../../navbar/navbar";

import functionsCSS from "./trigonometry.module.css";
import topicIcon from "./Trigonometry.png"

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


export default function Functions(){

    function goToVideo(){
        window.open('https://www.youtube.com/watch?v=NpEaa2P7qZI')
    }

    return(
        <Fragment>

            <Header> </Header>
            <Navbar> </Navbar>

            <section>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Trigonometry </h1> 

<div className={functionsCSS.summaryBox}>
    
    <div className={functionsCSS.textBox}>

        <p> 
            Trigonometry is the branch of mathematics concerned with specific functions of angles and their application to calculations. 
            There are six functions of an angle commonly used in trigonometry. Their names and abbreviations are sine (sin), 
            cosine (cos), tangent (tan), cotangent (cot), secant (sec), and cosecant (csc). These six trigonometric functions 
            in relation to a right triangle
        </p>

    </div>

    <img src={topicIcon}/>


</div>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Lectures </h1>

<div className={functionsCSS.lectures} id="lectures"> 

    <h2> Introduction </h2>

    <div className={functionsCSS.item}>
        <h4> What is trigonometry? </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 8:50 </h4>
    </div>

    <h2> Chapter 1 </h2>

    <div className={functionsCSS.item}>
        <h4> Angles and right triangles  </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 16:13 </h4>
    </div>

    <h2> Chapter 2 </h2>

    <div className={functionsCSS.item}>
        <h4> Trigonometric functions </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 32:30 </h4>
    </div>

    <h2> Chapter 3 </h2>

    <div className={functionsCSS.item}>
        <h4> Non right triangles  </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 25:50 </h4>
    </div>

    <h2> Chapter 4 </h2>

    <div className={functionsCSS.item}>
        <h4> Trigonometric graphs </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 42:22 </h4>
    </div>

</div>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Guides  </h1>

<div className={functionsCSS.guides}  id="guides">
    
    <div className={functionsCSS.item}>
        <h3> Newcomer </h3>

        <div className={functionsCSS.list}>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Right Angles Guide #1 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>
        
            <div className={functionsCSS.piece}>
                <p onClick={download}> Non Right Angles Guide #1 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Graphs Guide #1  </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Trigonometric Equations Guide #1 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

        </div>
    </div>

                
    <div className={functionsCSS.item}>
        <h3> Intermediate </h3>

        <div className={functionsCSS.list}>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Right Angles Guide #2 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Non Right Angles Guide #2 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Graphs Guide #2 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Trigonometric Equations Guide #2 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

        </div>
    </div>

    
    <div className={functionsCSS.item}>
        <h3> Challenging </h3>

        <div className={functionsCSS.list}>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Triangles Guide #3 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Graphs Guide #3 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Trigonometric Equations Guide #3 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

        </div>

    </div>

</div>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Study Sheets  </h1>

<div className={functionsCSS.sheetBox}>
    
    <div className={functionsCSS.item}>
        <h1> Theory </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

    <div className={functionsCSS.item}>
        <h1> Definitions </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

    <div className={functionsCSS.item}>
        <h1> Properties </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

    <div className={functionsCSS.item}>
        <h1> Formulas </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

    <div className={functionsCSS.item}>
        <h1> Unit Circle </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

    <div className={functionsCSS.item}>
        <h1> Inverse Functions </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

    <div className={functionsCSS.item}>
        <h1> Law of Sines </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

    <div className={functionsCSS.item}>
        <h1> Law of Cosines </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>

    <div className={functionsCSS.item}>
        <h1> Law of Tangents </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>



</div>


</section>


            

        </Fragment>
    )


}