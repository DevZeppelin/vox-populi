import React from 'react'

const NavBar = () => {
  return (
    <div className='hidden md:flex text-orangi bg-black justify-center px-32 p-2 gap-4'>
        <a className='cursor-pointer'>Especificaciones</a><span>•</span>
        <a className='cursor-pointer'>Estructura</a><span>•</span>
        <a className='cursor-pointer'>Infraestructura</a><span>•</span> 
        <a className='cursor-pointer'>Unirte al equipo</a>        
    </div>
  )
}

export default NavBar