import './App.css';
import Nav from './components/nav';
import Home from './components/homeComponent';
import AboutMe from './components/aboutComponent';
import SkillsComponent from './components/skillsComponent';
import Qualifecations from './components/qualifecationsComponent';
import Service from './components/serviceComponent';
import React from 'react';
import { useState, createContext, useContext } from "react";
import useBlure from './hooks/useBlure';
import Project from './components/Project';
import Testmonial from './components/testmonialComponent';
import GetInTouch from './components/getInTouchComponent';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Connectme from './components/conntactMeCOmponent';
import Footer from './components/footer';
function App() {
  const { blure, SetBlure } = useBlure()

  return (
    <div className={blure ? 'App blure' : ' App notBlure'} >
      <Nav />
      <div style={{ paddingTop: '10em' }}>
        <Home />
        {/* about me 310 */}
        <AboutMe />
        <SkillsComponent />
        {/*  Qualifecations*/}
        <Qualifecations />
        <Service />
        <Project />
        <Connectme />
        <Testmonial />
        <GetInTouch />
        <Footer />

      </div>
    </div>

  );
}

export default App;
