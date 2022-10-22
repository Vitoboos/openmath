import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Highlight from "./components/highlight/highlight";
import Resources from "./components/resources/resources";
import Roadmap from "./components/roadmap/roadmap";
import mainCSS from "./main.css"

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import { Fragment } from 'react'

function Main() {
  return (

    <Fragment>

      <Header/>
      <Navbar/>
      <Highlight/>
      <Resources/>
      <Roadmap/>

    </Fragment>

  );
}

export default Main;
