import React from 'react'
import { Link } from 'react-router-dom'

 const Navbar = () => {
  return (
    <>
     <div className='bg-cyan-800 p-6 flex justify-between'>
        <h1 className='text-zinc-100 text-3xl '>Job Portal</h1>
        <div className='flex gap-5 text-white text-xl'>
            <Link to={'/'} >Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/jobs'}>Jobs</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
            <Link to={'/userdash'}>Userdash</Link>
        </div>
     </div>

    </>
   
  )
}

export default Navbar;
