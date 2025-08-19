import React from 'react'
import image from '../assets/images/pic5.jpeg'

function Fourth() {
  return (
    <div className='bg-black grid grid-cols-2'>

    <div className=' p-10 pl-15'>
          <p className='text-white mt-10'>Vehicles</p>
          <p className='text-white text-3xl mt-10 '>The S-Class.</p>
          <p className='text-white mt-40'>Expressive design, first-class comfort, and innovative safety technology.</p>
           <div className='border flex gap-2 w-[35%] bg-white p-2 rounded-3xl overflow-auto mt-6'><div>Configure now</div>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
    </div></div>
     </div>

                         <div className='mt-20'>
                               
                                <img className='w-[80%] mt-4' src={image} alt="" />
                         </div>
     

   

                      
        
    </div>
  )
}

export default Fourth