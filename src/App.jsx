
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Videoroom from './pages/Videoroom'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/room/:roomID' element={<Videoroom/>} />
      </Routes>
    </div>
  )
}

export default App
