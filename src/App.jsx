import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers'
import { Routes, Route }from 'react-router-dom'
import SinglePlayer from './components/SinglePlayer'
import NewPlayerForm from './components/NewPlayerForm'

function App() {

  return (
    <>
      <h1>Puppy Bowl</h1>
      <Routes>
        <Route path='/' element={
          <div>
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
 