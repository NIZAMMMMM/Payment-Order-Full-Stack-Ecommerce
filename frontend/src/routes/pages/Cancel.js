import React from 'react'
import CANCELLED from '../../assest/cancel.png'
import { Link } from 'react-router-dom'

const Cancel = () => {
  return (
    <div className=' h-[80vh] mx-auto flex justify-center items-center flex-col  '>
        <img className='animate-bounce mix-blend-multiply'
        src={CANCELLED}
        width={350}
        height={350}
        />
        <p  className='text-red-600 font-bold text-xl'>Payment cancelled</p>
        <Link to={"/cart"} className='p-2 px-3  mt-3 border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white rounded'>Go To Cart</Link>
    </div>
  )
}

export default Cancel