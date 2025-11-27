import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Notescard from '../components/Notescard'

const Home = () => {
  return (
    <div className='main'>
      <Sidebar/>
      <Navbar/>
      <Notescard/>
    </div>
  )
}

export default Home
