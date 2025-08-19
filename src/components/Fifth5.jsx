import React from 'react'
import instagram from '../assets/images/inst.png'
import facebook from '../assets/images/fc.png'
import x from '../assets/images/twitter.png'
import linkedin from '../assets/images/link.png'
import youtube from '../assets/images/yout.png'
import tick from '../assets/images/tick.jpg'

function Fifth5() {
  return (
    <div className='p-20'>
        <p className=' text-center text-3xl text-black'>Follow Mercedes-Benz</p>
        <div className='flex gap-30 p-15 justify-center'>
                       <div><img className='h-10 w-10' src={instagram} alt="" /></div>
                        <div><img className='h-10 w-10' src={facebook} alt="" /></div>
                         <div><img className='h-10 w-10' src={x} alt="" /></div>
                          <div><img className='h-10 w-10' src={linkedin} alt="" /></div>
                           <div><img className='h-10 w-10' src={youtube} alt="" /></div>
                            <div><img className='h-10 w-10' src={tick} alt="" /></div>
        </div>
    </div>
  )
}

export default Fifth5