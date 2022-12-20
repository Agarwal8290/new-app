import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import Navbar from './navbar';
import Image from '../src/assets/image.jpg';
const Home = () => {

    const [RoomCode , setRoomCode] = useState("");

    const navigate = useNavigate();

const submitCode = (e) =>{
e.preventDefault();
navigate(`/room/${RoomCode}`)
}

  return (
    <div>
        <Navbar/>
        
        <div className='home'>
          <div className='image'>
            <img src={Image} alt="" />
          </div>
          <div className='form1'>
            <h1>Video Chat App</h1>
            <h3>With ZegoCloud</h3>

        <form action="" onSubmit={submitCode} className="form">
      <label htmlFor="" >Enter Room Code</label>
      <input type="text" required placeholder="Enter Room Code" 
      value={RoomCode} onChange={(e) =>{setRoomCode(e.target.value)}}
      />
      <button type='submit'>Go</button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Home
