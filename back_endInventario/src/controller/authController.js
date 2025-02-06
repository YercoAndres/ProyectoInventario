import { user } from "../models/authModel.js";
import bcrypt from 'bcryptjs';


export const register = (req, res) => {
    const {username, email,  password } = req.body;
    // primero se ejecuta la validacion de buscar el usuario con el metodo finbyuser
    user.findByUser(username,(err, results)=>{
        if (err) return res.status(500).json({ message: 'Error en la base de datos' });
        if(results.length > 0){
           return res.status(400).json({message:'Este usuario ya se encuentra registrado'})
        }
        // luego se ejecuta la validacion de buscar el email con el metodo finbyemail
        user.findByEmail(email,(err, results) => {
            if (err) return res.status(500).json({ message: 'Error en la base de datos' });
            if(results.length > 0){
              return res.status(400).json({message:'Este correo ya se encuentra registrado'})
            }
            // finalizando con el metodo create para crear un usuario
            user.create({username, email, password}, (err, result) => {
                if(err) {
                   return res.status(500).json({message: 'Error al registar usuario'})
                    
                } else {
                   return res.status(200).json ({message:'Usuario registrado de forma correcta'})
                }
            })
        })
    })
}

export const login = (req, res) => {
    const{username, password}= req.body;

    user.findByUser(username, (err, results) => {

        if (results.length === 0) {
            return res.status(400).json({ message: 'Usuario no encontrado'});
          }
        const user = results[0];

        const isMatch = bcrypt.compareSync(password, user.password)

        if(!isMatch){
             res.status(400).json({message:'Credenciales invalidas'})
        } else{
            res.status(200).json({message:'Inicio de sesion existoso'})
        }
    })
    
}