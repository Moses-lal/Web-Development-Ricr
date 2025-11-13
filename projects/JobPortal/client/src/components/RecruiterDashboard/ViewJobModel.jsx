import React from 'react'

const ViewJobModel = ({isOpen , onClose}) => {





    if(!isOpen) return null;


    

  return (
    <>
    <div>ViewJobModel</div>
    <button onClick={onClose}>click </button>
    
    </>
  )
}

export default ViewJobModel