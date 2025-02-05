import { db } from "../config/db.js";
import bcrypt from 'bcryptjs';


export const user = {
    create: (userData, callback) =>{
        const hashedPass = bcrypt.hashSync(userData.password, 10);
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)'
        db.query(query, [userData.username, userData.email, hashedPass], callback)
    },
    findByUser: (username, callback)=>{
        const query = 'SELECT * FROM users WHERE username = ?';
        db.query(query,[username], callback)
    }
}