import React from 'react'
import pic1 from '../assets/images/pic1.jpeg'
import pic2 from '../assets/images/pic2.jpeg'
import pic3 from '../assets/images/pic3.jpeg'
import car1 from "../assets/images/fist.jpeg";
import pic4 from "../assets/images/pic4.jpeg";
function Third3() {
  return (
    <div className='grid grid-cols-2 max-sm:grid-cols-1  w-full'>

        
        <div >
            <div className='m-20 max-sm:m-10'>
                   <p className='mt-4'>Zeitgeist</p>
                   <p className='text-gray-700 text-2xl mt-4 '>Neighbourly Tales.</p>
                   <img className='w-[90%] mt-4' src={pic1} alt="" />
            </div>


            <div className='m-20 max-sm:m-10'>
                   <p className='mt-4'>Vehicles</p>
                   <p className='text-gray-700 text-2xl mt-4 '>Grand Opening.</p>
                   <img className='w-[90%] mt-4' src={pic2} alt="" />
            </div>


            <div className='m-20 max-sm:m-10'>
                   <p className='mt-4'>Innovation</p>
                   <p className='text-gray-700 text-2xl mt-4 '>Digital Companion.</p>
                   <img className='w-[90%] mt-4' src={pic3} alt="" />
            </div>
   </div>

                    <div className='mt-80'>
             <div className='m-20 max-sm:m-10'>
                   <p className='mt-4'>Design</p>
                   <p className='text-gray-700 text-2xl mt-4 '>Performance in every detail.</p>
                   <img className='w-[90%] mt-4' src={car1} alt="" />
            </div>


             <div className='m-20 max-sm:m-10'>
                   <p className='mt-4'>Innovation</p>
                   <p className='text-gray-700 text-2xl mt-4 '>Vision V.Dawn of a new era.</p>
                   <img className='w-[90%] mt-4' src={pic4} alt="" />
            </div>
            </div>

            

    </div>
  )
}

export default Third3