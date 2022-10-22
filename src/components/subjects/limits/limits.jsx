import React from "react";
import Header from "../../header/header";
import Navbar from "../../navbar/navbar";

import functionsCSS from "./limits.module.css";
import topicIcon from "./limits.png"

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


export default function Limits(){

    function goToVideo(){
        window.open('https://www.youtube.com/watch?v=NpEaa2P7qZI')
    }

    return(
        <Fragment>

            <Header> </Header>
            <Navbar> </Navbar>

<section>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Limits  </h1>

<div className={functionsCSS.summaryBox}>
    
    <div className={functionsCSS.textBox}>

        <p> 
            In mathematics, a limit is defined as a value that a function approaches the output for the given input values.
            Limits are important in calculus and mathematical analysis and used to define integrals, derivatives, and continuity. 
            It is used in the analysis process, and it always concerns about the behaviour of the function at a particular 
        </p>

    </div>

    <img src={topicIcon}/>


</div>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Lectures </h1>

<div className={functionsCSS.lectures} id="lectures"> 

    <h2> Introduction </h2>

    <div className={functionsCSS.item}>
        <h4> What is a limit? </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 12:00 </h4>
    </div>

    <h2> Chapter 1 </h2>

    <div className={functionsCSS.item}>
        <h4> Limit definition   </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 11:24 </h4>
    </div>

    <h2> Chapter 2 </h2>

    <div className={functionsCSS.item}>
        <h4> Limit properties </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 22:27 </h4> 
    </div>

    <h2> Chapter 3 </h2>

    <div className={functionsCSS.item}>
        <h4> Limit estimation </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 17:14 </h4>
    </div>

    <h2> Chapter 4 </h2>

    <div className={functionsCSS.item}>
        <h4> Resolution Methods I </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 30:24 </h4>
    </div>

    <h2> Chapter 5 </h2>

    <div className={functionsCSS.item}>
        <h4> Resolution Methods II </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 30:52 </h4>
    </div>

    <h2> Chapter 6 </h2>

    <div className={functionsCSS.item}>
        <h4> Continuity  </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 20:45 </h4>
    </div>

    <h2> Chapter 7 </h2>

    <div className={functionsCSS.item}>
        <h4> Infinite Limits  </h4>
        <img src={videoIcon} onClick={goToVideo}/>
        <h4> 15:27 </h4>
    </div>



</div>

<h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Guides  </h1>

<div className={functionsCSS.guides}  id="guides"> 
    
    <div className={functionsCSS.item}>
        <h3> Newcomer </h3>

        <div className={functionsCSS.list}>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Limits by definition #1 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Limits Problems #1  </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Continuity #1  </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>


            <div className={functionsCSS.piece}>
                <p onClick={download}> Infinite Limits #1  </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

        </div>
    </div>

                
    <div className={functionsCSS.item}>
        <h3> Intermediate </h3>

        <div className={functionsCSS.list}>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Limit Problems #2 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Limit Problems #3 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Continuity #2   </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

        </div>
    </div>

    
    <div className={functionsCSS.item}>
        <h3> Challenging </h3>

        <div className={functionsCSS.list}>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Limits Problems #4 </p>
                <p onClick={download}> Answers </p>
                <p onClick={download}> Step by step solutions</p>
            </div>

            <div className={functionsCSS.piece}>
                <p onClick={download}> Infinite Limits #2 </p>
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
        <h1> Evaluations </h1>
        <img onClick={download} src={sheetIcon}/>
    </div>


</div>

</section>


        </Fragment>
    )


}