import React from 'react'
import { Link } from 'react-router-dom'

 const Navbar = () => {
  return (
    <>
     <div className='bg-cyan-800 p-3'>
        <h1 className='text-zinc-100 text-3xl '>Job Portal</h1>
        <div className=''>
            <Link to={'/'} >home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/jobs'}>Jobs</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
        </div>
     </div>

    </>
   
  )
}

export default Navbar;
