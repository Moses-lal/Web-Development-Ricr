import React from 'react'
import img1 from '../assets/virtual-market-place.png'
import img2 from '../assets/img2.png'

 const Project = () => {
  return (
    <>
    
     <section>
      <div className=' p-2  bg-green-300'>
         <h2 className='text-3xl text-center me-52 mt-8 '> Featured Projects</h2>
      </div>

      <div className='flex bg-blue-950'>
        <div className='ms-8 mt-10 border p-5 rounded-3xl bg-emerald-100 '>
          <img src={img1} width="400px" height="400px" className='rounded-2xl shadow-md shadow-blue-700'/>
          <h3 className='text-2xl mt-3 font-bold text-blue-800'>Virtual Market place -  </h3>
          <p className='font-bold text-blue-400'>a market for fresher to start earning and gain experience</p>
          <p className='mt-3 text-orange-700'>Made In - Full Stack using MERN</p>
          <p className='text-lime-600'>Status - Working and not live </p>
          <p className='text-blue-900'>More Info - <ul>
            <li>- a platform for freelancers and clients to collaborate efficiently</li>
            <li>- Integrated secure payment gateway, escrow system,  <br />real-time chat, and feedback system</li>
            <li>- Used MERN stack for scalable performance and security</li>
            <li>- Scalable and much in demand </li>
            </ul>
            
            </p>

        </div>

         <div className='ms-8 mt-10 border p-5 rounded-3xl bg-emerald-100'>
          <img src={img2} width="400px" height="400px" className='rounded-2xl shadow-md shadow-blue-700'/>
          <h3 className='text-2xl mt-3 font-bold text-blue-800'>E- Learning Platform - </h3>
          <p className='font-bold text-blue-400'>a market for fresher to start earning and gain experience</p>
          <p className='mt-3 text-orange-700'>Made In - Full Stack using MERN</p>
          <p className='text-lime-600'>Status - Working and not live </p>
          <p className='text-blue-900'>More Info - <ul>
            <li>- a platform for freelancers and clients to collaborate efficiently</li>
            <li>- Integrated secure payment gateway, escrow system,  <br />real-time chat, and feedback system</li>
            <li>- Used MERN stack for scalable performance and security</li>
            <li>- Scalable and much in demand </li>
            </ul>
            
            </p>

        </div>
      </div>
     
      
     </section>
    </>
   
  )
}


export default Project;
