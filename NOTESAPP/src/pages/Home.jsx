import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Notescard from '../components/Notescard'

const Home = () => {
      const [category,setfolder]=useState(false);
      const [file,setfile]=useState(false);
      // const [defaulting,setdefault]=useState(false);
      
  return (
    <div className='main'>
      <Sidebar file={file} setfile={setfile} category={category} setfolder={setfolder} />
      <Navbar/>
      <Notescard file={file} category={category}/>
    </div>
  )
}

export default Home
