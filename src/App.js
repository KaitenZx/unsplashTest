import React from 'react'
import './App.css';
import DailyPictures from './pages/DailyPictures';
import  Footer from './components/Footer'
import { useState } from "react"

function App() {
  const [page, setPage] = useState('Home')
  return (
    <div className="App">
        
        <DailyPictures />
        <Footer  page={page} setPage={setPage} />
    </div>
  )
}



export default App;
