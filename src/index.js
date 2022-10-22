import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Main';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Functions from './components/subjects/functions/functions';
import Trigonometry from './components/subjects/trigonometry/trigonometry';
import Limits from './components/subjects/limits/limits';
import Derivates from './components/subjects/derivatives/derivatives';
import Integration from './components/subjects/integration/integration';
import Complex from './components/subjects/complex/complex';
import Extra from './components/extraContent/extraContent';
import Discord from './components/outsideContent/discordRepo/discord';
import Guides from './components/outsideContent/guideRepo/guides';
import Lectures from './components/outsideContent/lecturesRepo/lectures';
import Calculus from './components/roadmap/roadContent/calculus';
import MultiCalculus from './components/roadmap/roadContent/multi';
import Probability from './components/roadmap/roadContent/probability';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <BrowserRouter>
    <Routes> 

      <Route path='/' element={<App/>} />
      <Route path='/functions' element={<Functions/>} />
      <Route path='/trigonometry' element={<Trigonometry/>} />
      <Route path='/limits' element={<Limits/>} />
      <Route path='/derivatives' element={<Derivates/>} />
      <Route path='/integration' element={<Integration/>} />
      <Route path='/complex' element={<Complex/>} />
      <Route path='/extra' element={<Extra/>} />

      <Route path='/discord' element={<Discord/>}> </Route>
      <Route path='/guides' element={<Guides/>}> </Route>
      <Route path='/lectures' element={<Lectures/>}> </Route>

      <Route path='/calculus' element={<Calculus/>}> </Route>
      <Route path='/multicalculus' element={<MultiCalculus/>}> </Route>
      <Route path='/probability' element={<Probability/>}> </Route>


    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
