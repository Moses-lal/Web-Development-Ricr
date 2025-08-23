import React from 'react'

const Register = () => {
  return (
    <>
    <div className=' bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='min-w-md bg-white rounded-2xl space-y-10'>
         <h1 className='text-blue-800 text-2xl text-center' > Register </h1>
         <form className='space-y-6'>
         <div>
            <label htmlFor="FullName">FullName:</label>
            <input type="name" id='name' name='name' className='border' />
         </div>
         <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id='email'  className='border' />
         </div>
         <div>
            <label htmlFor="password">Name:</label>
            <input type="password"className='border' />
         </div>
         </form>
      </div>
    </div>
    </>
    
  )
}

export default Register;
