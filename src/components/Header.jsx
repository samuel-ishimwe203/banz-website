import React from 'react'
import logo from '../assets/images/logo.png'

function Header() {
  return (
    <div>
        <div className='flex gap-10'>
             <div>Deutsch | <span className='font-bold items-center'>English</span></div>
             <div>Provider/Privacy</div>
         </div>

         <div><img className='h-15 w-15' src={logo} alt="" /></div>
         <div><button>Search</button></div>
    </div>
  )
}

export default Header