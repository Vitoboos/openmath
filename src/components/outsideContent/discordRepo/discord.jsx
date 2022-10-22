import React from "react";
import Header from "../../header/header";
import Navbar from "../../navbar/navbar";

import discordLogo from "./discordLogo.png"

import discordCSS from "./discord.module.css"


import { Fragment } from "react";

export default function Discord(){

    function gotoDiscord(){

        window.open('https://discord.gg/hz9xayTj')

    }

    return(
        
        
        <Fragment>

            {gotoDiscord()}

            <Header> </Header>
            <Navbar> </Navbar>

            <div className={discordCSS.body}>
                <h1 className={discordCSS.mainTitle}> Welcome to our Community! </h1>

                <button className={discordCSS.mainBtn} onClick={gotoDiscord}> Join Now! </button> 

                <img className={discordCSS.mainLogo} src={discordLogo}/>

            </div>

        </Fragment>
    )


}