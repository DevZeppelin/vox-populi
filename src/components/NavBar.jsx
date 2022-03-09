import React from 'react'

const NavBar = () => {
  return (
    <div className='hidden md:flex text-orangi bg-black justify-center px-32 p-2 gap-4'>
        <a className='cursor-pointer'>Proyectos</a><span>♦</span>
        <a className='cursor-pointer'>Ideas</a><span>♦</span>
        <a className='cursor-pointer'>Problemas</a><span>♦</span> 
        <a className='cursor-pointer'>¡Quiero desarrollar!</a>        
    </div>
  )
}

export default NavBar