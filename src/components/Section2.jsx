import React from 'react'
import car1 from "../assets/images/fist.jpeg";

function Section2() {
  return (
    <div  className="h-screen w-full bg-cover bg-center p-24 max-sm:p-5" style={{ backgroundImage: `url(${car1})` }}>

        <p className="text-white text-3xl p-4 mt-28">Performance in every detail.</p>
        <p className='text-white text-xl pl-4'>Concept AMG GT XX.</p>

        <div className='border flex gap-2 w-[17%] bg-white p-2 rounded-3xl m-4 overflow-auto'><div>Discover more</div>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</div></div>

        
    </div>
  )
}

export default Section2