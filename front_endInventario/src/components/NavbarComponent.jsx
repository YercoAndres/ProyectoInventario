import React from 'react'

export default function NavbarComponent() {
  return (
    <header>
        <nav className=' p-2 w-full bg-gray-800 grid grid-cols-2 text-white list-none'>
            <div className='m-3 flex flex-row gap-6 justify-center'>
                <li><a href="#index" className='p-3 hover:border-b-2 hover:border-yellow-300 '>Inicio</a></li>
                <li><a href="#index" className='p-3 hover:border-b-2'>Acerca de</a></li>
                <li><a href="#index" className='p-3 hover:border-b-2 '>Otros</a></li>
            </div>
                <div className='grid justify-end mt-3 mr-6'>
                    <li><a href="/login" className='p-3 hover:border-b-2'>Login</a></li>
                </div>
        </nav>
    </header>
  )
}
