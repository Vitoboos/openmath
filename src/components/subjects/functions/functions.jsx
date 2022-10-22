import React from "react";
import Header from "../../header/header";
import Navbar from "../../navbar/navbar";

import functionsCSS from "./functions.module.css";
import topicIcon from "./function.gif";

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

            <h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Functions </h1> 

            <div className={functionsCSS.summaryBox}>
            
            <div className={functionsCSS.textBox}>

                <p> 
                    A function in mathematics is an expression, rule, or law that defines a relationship between one variable (the independent variable) 
                    and another variable (the dependent variable). 
                    Functions are ubiquitous in mathematics and are essential for formulating physical relationships in the sciences.
                </p>

            </div>

            <img src={topicIcon}/>

        </div>

        <h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Lectures </h1> 

        <div className={functionsCSS.lectures} id="lectures"> 

            <h2> Introduction </h2>

            <div className={functionsCSS.item}>
                <h4> What is a function? </h4>
                <img src={videoIcon} onClick={goToVideo} />
                <h4> 7:35 </h4>
            </div>

            <h2> Chapter 1 </h2>

            <div className={functionsCSS.item}>
                <h4> Evaluating functions  </h4>
                <img src={videoIcon} onClick={goToVideo} />
                <h4> 21:03 </h4>
            </div>

            <h2> Chapter 2 </h2>

            <div className={functionsCSS.item}>
                <h4> Plotting of functions </h4>
                <img src={videoIcon} onClick={goToVideo} />
                <h4> 22:27 </h4>
            </div>

            <h2> Chapter 3 </h2>

            <div className={functionsCSS.item}>
                <h4> Piecewise functions </h4>
                <img src={videoIcon} onClick={goToVideo} />
                <h4> 34:51 </h4>
            </div>

        </div>

        <h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Guides </h1> 

        <div className={functionsCSS.guides} id="guides">
            
            <div className={functionsCSS.item}>
                <h3> Newcomer </h3>

                <div className={functionsCSS.list}>

                    <div className={functionsCSS.piece}>
                        <p onClick={download}> Function Evaluation #1 </p>
                        <p onClick={download}> Answers </p>
                        <p onClick={download}> Step by step solutions</p>
                    </div>

                    <div className={functionsCSS.piece}>
                        <p  onClick={download}> Function plotting #1  </p>
                        <p  onClick={download}> Answers </p>
                        <p  onClick={download}> Step by step solutions</p>
                    </div>

                    <div className={functionsCSS.piece}>
                        <p  onClick={download}> Piecewise Functions #1  </p>
                        <p  onClick={download}> Answers </p>
                        <p  onClick={download}> Step by step solutions</p>
                    </div>

                </div>
            </div>

                        
            <div className={functionsCSS.item}>
                <h3> Intermediate </h3>

                <div className={functionsCSS.list}>

                    <div className={functionsCSS.piece}>
                        <p  onClick={download}> Function problems Guide #1 </p>
                        <p  onClick={download}> Answers </p>
                        <p  onClick={download}> Step by step solutions</p>
                    </div>

                    <div className={functionsCSS.piece}>
                        <p  onClick={download}> Function plotting #2  </p>
                        <p  onClick={download}> Answers </p>
                        <p  onClick={download}> Step by step solutions</p>
                    </div>

                    <div className={functionsCSS.piece}>
                        <p  onClick={download}> Piecewise Functions #2  </p>
                        <p  onClick={download}> Answers </p>
                        <p  onClick={download}> Step by step solutions</p>
                    </div>


                </div>
            </div>

            
            <div className={functionsCSS.item}>
                <h3> Challenging </h3>

                <div className={functionsCSS.list}>

                    <div className={functionsCSS.piece}>
                        <p  onClick={download}> Function problems Guide #2 </p>
                        <p  onClick={download}> Answers </p>
                        <p  onClick={download}> Step by step solutions</p>
                    </div>

                    <div className={functionsCSS.piece}>
                        <p  onClick={download}> Function plotting #3  </p>
                        <p  onClick={download}> Answers </p>
                        <p  onClick={download}> Step by step solutions</p>
                    </div>

                    <div className={functionsCSS.piece}>
                        <p  onClick={download}> Piecewise Functions #3  </p>
                        <p  onClick={download}> Answers </p>
                        <p  onClick={download}> Step by step solutions</p>
                    </div>

                </div>

            </div>

        </div>

        <h1 className={functionsCSS.topicTitle} id={functionsCSS.functionTitle}> Study Sheets  </h1> 

        <div className={functionsCSS.sheetBox}>
            
            <div className={functionsCSS.item}>
                <h1> Theory </h1>
                <img  onClick={download} src={sheetIcon}/>
            </div>

            <div className={functionsCSS.item}>
                <h1> Common Functions </h1>
                <img  onClick={download} src={sheetIcon}/>
            </div>

        </div>


            </section>


            

        </Fragment>
    )


}