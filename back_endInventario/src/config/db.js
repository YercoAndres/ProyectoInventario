import mysql from 'mysql2';
import dotenv from 'dotenv';


dotenv.config(); // Para el uso de una variable de entorno utilizamos dotenv


// Exportamos y creamos la conexion de la base de datos en base a la variable de entorno
export const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
});


