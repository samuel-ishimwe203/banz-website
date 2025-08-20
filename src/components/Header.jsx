import React from 'react'
import logo from '../assets/images/logo.png'

function Header() {
  return (

    <div>
    <div className='flex bg-black text-white items-center justify-between px-10'>
        <div className='flex gap-10 max-sm:block'>
             <div>Deutsch | <span className='font-bold items-center'>English</span></div>
             <div>Provider/Privacy</div>
         </div>

         <div><img className='h-15 w-15' src={logo} alt="" /></div>

           <div className='flex gap-5 max-sm:hidden'>
         <div className='flex gap-1'>
          
          <div >
            <button>Search </button></div>
              <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
         </svg>
              </div>
          
          </div>

<div className='flex gap-1 '> 
     <div><button>Login </button></div> 
     <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</div></div>

</div>
    </div>



    <div className='bg-bg-dark p-2 text-white w-full'>
              <ul className='flex  justify-center gap-8 max-sm:block sm: md: lg: '>
                <li><a href="#">vehicles</a></li>
                <li><a href="#">Art & Culture</a></li>
                <li><a href="#">Stainability</a></li>
                <li><a href="#">Design</a></li>
                 <li><a href="#">Innivation</a></li>
                  <li><a href="#">Exclusive</a></li>
              </ul>
    </div>




    </div>
  )
}

export default Header