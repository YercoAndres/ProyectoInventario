import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [showPass, setShowPass] = useState('');
    const navigate = useNavigate();

    
    // Funcion para validar la contraseña que sea regex 
    const validarContrasena = (contrasena) => {
      const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return regex.test(contrasena);
    };
  

    const handleRegister = async (e) => {
        e.preventDefault();


        if(!username || !email || !password || !passwordRepeat){
            toast.error('Todos los campos son obligatorios');
            return;
        }
 
        if (!validarContrasena(password)) {
          toast.error('La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número.');
          return;
        }

        if(password !== passwordRepeat){
            toast.error('Las contraseñas no coinciden');
            return;
        }


        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, email, password}),
        });

        const data = await response.json();

        if(response.ok){
            toast.success(data.message);
            setTimeout(() => {
              navigate('/login'); 
            }, 2000)
        } else{
          toast.error(data.message)
        }
    }


 

  return (
    <>
    <div className='flex items-center justify-center min-h-screen w-full '>
      <div className='w-full max-w-lg mx-auto p-3'>

        {/*  Empezando el formulario */}

        <form onSubmit={handleRegister}
        className='bg-slate-50 shadow-2xl rounded-xl px-8 md:px-14 py-10 mb-8'
        >
        <h2 className='text-2xl font-bold text-center mb-6'>Registrate</h2>

         {/* input del usuario */}
        <div className='mb-3'>
        <label htmlFor="username"
        className='block text-slate-900 text-sm font-bold mb-2'
        >Usuario:</label>
        <input type="text" placeholder='Ingresa tu usuario'
        value={username}
        onChange={(e) => setUserName(e.target.value)} // capturar lo que el usuario escribe
        className='shadow-md appearance-none border border-gray-300 rounded-lg w-full py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-black
        '
        />
        </div>

           {/* input del email */}

        <div className='mb-3'>
        <label htmlFor="email"
        className='block text-slate-900 text-sm font-bold mb-2'
        >Correo:
        </label>
        <input type="email" placeholder='Ingresa tu correo'
        value={email}
        onChange={(e) => setEmail(e.target.value)} // capturar lo que el usuario escribe
        className='shadow-md appearance-none border border-gray-300 rounded-lg w-full py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-black'
        />
        </div>

          {/* input del password */}

        <div className='mb-3'>
        <label htmlFor="password"
        className='block text-slate-900 text-sm font-bold mb-2'
        >Contraseña:</label>
        <input type={showPass ? 'text' : 'password'} placeholder='Ingresa tu contraseña'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='shadow-md appearance-none border border-gray-300 rounded-lg w-full py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-black'
        /> 
        </div>

          {/*  input del password repeat */}
        
        <div className='mb-3'>
        <label htmlFor="passworRepeat"
        className='block text-slate-900 text-sm font-bold mb-2'
        >Repite tu contraseña:</label>
        <input type={showPass ? 'text' : 'password'} placeholder='Repite tu contraseña'
        value={passwordRepeat}
        onChange={(e) => setPasswordRepeat(e.target.value)}
        className='shadow-md appearance-none border border-gray-300 rounded-lg w-full py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-black'
        />

         {/* Aca lo que estamos haciendo es que cuando password y passwordRepeat tengan algo escrito se muestre el span, que contiene un funcion onClick para mostrar o ocultar la contraseña */}

        {password && passwordRepeat && (
                 <span onClick={() => setShowPass (!showPass)} className='flex gap-1 mt-3 cursor-pointer text-xs text-gray-600 hover:text-teal-700 '>

                 {showPass ? <EyeOff height={18}/> : <Eye height={18}/>  }  {showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                </span>
              )}
       
        </div>
        <div className='flex items-center justify-center'>
          <button type='submit' className='bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'>Registrar</button>
        </div>
        </form>
      </div>
    </div>    
    </>
  )
}
