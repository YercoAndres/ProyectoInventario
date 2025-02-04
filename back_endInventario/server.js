import express from 'express';
import  {db}  from './src/config/db.js';
import cors from 'cors';
import authRoutes from './src/routes/authRoutes.js'

const app = express();
app.use(express.json())
app.use(cors());

const port = process.env.PORT || 3000;

// rutas de los endpoints

app.use('/api/auth', authRoutes);




app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})


db.connect((err) => {
    if(err){
        console.log('Error al conectar a la base de datos');
        return
    }else {
        console.log('Conectado de forma correcta a la base de datos');
        
    }
})


