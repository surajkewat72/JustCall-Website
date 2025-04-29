import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    let navigate=useNavigate()
    let [input,setInput]=useState("")
    function handleJoin(){
        navigate(`/room/${input}`)
    }
  return (
    <div id='home'>
      <h1 className="welcome-heading">Just Call</h1>
      <p className="tagline">Connect with your friends and colleagues</p>
      <img src='/JustCallme.png' alt="JustCallMe Logo" />
      <input type="text" placeholder='Enter Your Room' value={input} onChange={(e) => setInput(e.target.value)} />
      <button className="button" onClick={handleJoin}>
        Join Now
      </button>
    </div>
  )
}

export default Homepage
