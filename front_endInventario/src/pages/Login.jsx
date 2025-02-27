import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function Login() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    

    const handleLogin = async (e) => {
        e.preventDefault()

      

        if(!username || !password){
            toast.error('Todos Los campos son obligatorios')
        }


        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        });

        const data = await response.json();

        if(response.ok){
            toast.success(data.message)
            setTimeout(() => {
                navigate('/'); // Aca cambiar la ruta a pagina principal del inventario
              }, 1000)
        } else{
            toast.error(data.message)
        }



    }

  return (
    <div className='flex items-center justify-center min-h-screen w-full'>

        <div className='w-full max-w-lg mx-auto p-3'>
        <form onSubmit={handleLogin} className='bg-slate-50 shadow-2xl rounded-xl px-8 md:px-14 py-10 mb-8'>
        <h2 className="text-2xl font-bold text-center mb-6 text-slate-900">Inicio de Sesión</h2>
        <div className='mb-4'>
        <label htmlFor="usuario" className='block text-slate-900 text-sm font-bold mb-2'>Usuario</label>
        <input type="text" id='user' value={username} onChange={(e) => setUserName(e.target.value)} 
        className='shadow-md appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-blue-500'
        />
        </div>

        <div className='mb-4'>
        <label htmlFor="contraseña" className='block text-slate-900 text-sm font-bold mb-2'>Contraseña</label>
        <input type="password" id='user' value={password} onChange={(e) => setPassword(e.target.value)} 
        className='shadow-md appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-blue-500'
        />
        </div>


        <div className='flex items-center justify-center'>
            <button type='submit' className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-xl  focus:outline-none focus:shadow-outline'>Iniciar sesion</button>
        </div>
        </form>
        <div className='text-center'>
            <div>
            <p>¿No tienes cuenta?</p>
            <a href="/register" className='font-bold text-emerald-800 hover:text-emerald-500'>Registrate acá</a>

            </div>
          
            <a
            className='hover:text-blue-600'
            href="/">Regresar a inicio</a>
            
        </div>
        </div>
    </div>
  )
}


    
