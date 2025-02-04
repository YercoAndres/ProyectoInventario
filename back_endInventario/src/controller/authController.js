import { user } from "../models/authModel.js";
import bcrypt from 'bcryptjs';


export const register = (req, res) => {
    const {username, password } = req.body;

    user.create({username, password}, (err, result) => {
        if(err) {
            res.status(500).json({message: 'Error al registar usuario'})
            
        } else {
            res.status(200).json ({message:'Usuario registrado de forma correcta'})
        }
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