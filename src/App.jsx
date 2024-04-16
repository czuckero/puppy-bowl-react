import { useState, useEffect } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers'
import { Routes, Route }from 'react-router-dom'
import SinglePlayer from './components/SinglePlayer'
import NewPlayerForm from './components/NewPlayerForm'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={
          <div className='app-container'>
            <h1>Puppy Bowl</h1>
            <NewPlayerForm />
            <AllPlayers />
          </div>} >
        </Route>
        <Route path='/players/:id' element={<SinglePlayer />} ></Route>
      </Routes>
    </>
  )
}

export default App
 