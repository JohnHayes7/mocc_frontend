import React from "react";
import './App.css';
import LandingPage from './components/LandingPage'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import QaParent from './components/Qa_parent'
import QaProjectOverview from './components/QaProjectOverview'
import Premiers from './components/Premiers'
import Login from './components/Login/Login'
import LoginCallback from './components/Login/LoginCallback'



function App() {
  return (
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/oauth_callback" component={LoginCallback} />
        <Route exact path="/" component = {LandingPage} />
        <Route path ="/qa-projects" component = {QaParent} />
        <Route path ="/premiers" component = {Premiers} />
        <Route exact path ="/qa-projects/test-1" component = {QaProjectOverview}/>
      </div>
    </Router>
  );
}

export default App;
