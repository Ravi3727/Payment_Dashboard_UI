import React from 'react'
import Navbar from './Navbar';
import Topnav from './Topnav';

function Dashboard() {
  return (
    <div className='flex flex-row overflow-x-hidden'>
        <Navbar/>
        <Topnav/>
        </div>
  )
}

export default Dashboard