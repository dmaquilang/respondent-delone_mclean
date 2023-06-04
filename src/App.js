import React, {useState} from 'react'
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Home from "./Pages/Home/Home";
import Ethics from './Pages/Ethics/Ethics';
import Objective from './Pages/Objective/Objective';
import Demographics from './Pages/Demographics/Demographics';
import Likert from './Pages/Likert/Likert';
import Closing from './Pages/Closing/Closing';

function App() {
  return (
    <div className='app'>
        <Router>
          <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/objective/:id" element = {<Objective/>} />
            <Route path = "/ethics/:id" element = {<Ethics/>} />
            <Route path = "/demographics/:id" element = {<Demographics/>} />
            <Route path = "/likert/:id" element = {<Likert/>} />
            <Route path = "/closing" element = {<Closing/>} />
          </Routes>
      </Router>

    </div>
  );
}

export default App;
