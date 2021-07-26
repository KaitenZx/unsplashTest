import React from 'react'
import './App.css';
import DailyPictures from './pages/DailyPictures';
import  Footer from './components/Footer'
import { useState } from "react"
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom"
import Favorites from './pages/Favorites';
import Details from './pages/Details'

const getPage = () => localStorage.getItem('page') ?? 'home'

function App() {
  const [page, setPage] = useState(getPage())
  return (
    <Router>
    <div className="App">
        <Switch>
            <Route exact path="/home"><DailyPictures /></Route>
            <Route exact path="/favorites"><Favorites /></Route>
            <Route exact path="/detailes/:id"><Details /></Route>
        </Switch>
      
      <Footer  page={page} setPage={setPage} />
        
    </div>
    </Router>
  )
}



export default App;
