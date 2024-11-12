import React from 'react'
import CHECK from '../../assest/success.avif'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className=' h-[80vh] mx-auto flex justify-center items-center flex-col bg-[#EBECEF]'>
        <img className='mix-blend-multiply'
        src={CHECK}
        width={150}
        height={150}
        
        />
        <p  className='text-green-600 font-bold text-xl'>Payment success</p>
        <Link to={"/orders"} className='p-2 px-3  mt-3 border-2 border-green-600 font-semibold text-green-600 hover:bg-green-600 hover:text-white rounded'>See Orders </Link>
    </div>
  )
}

export default Success