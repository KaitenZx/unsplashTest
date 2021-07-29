import React from 'react'
import './App.css';
import DailyPictures from './pages/DailyPictures';
import  Footer from './components/Footer'
import { useState } from "react"
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom"
import Favorites from './pages/Favorites';
import Details from './pages/Details'

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
            <Route exact path="/home"><DailyPictures /></Route>
            <Route exact path="/favorites"><Favorites /></Route>
            <Route exact path="/detailes/:id"><Details /></Route>
        </Switch>
      
      <Footer  />
        
    </div>
    </Router>
  )
}



export default App;
