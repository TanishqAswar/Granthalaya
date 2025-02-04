import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import morgan from 'morgan';
import expressListEndpoints from 'express-list-endpoints';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors'

//*Configure env
dotenv.config();

//*DataBase Connection
connectDB();

//* REST Object
const app = express();

//* MiddleWares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

//* Routes
app.use('/api/v1/auth', authRoutes);

//* REST API
app.get('/', (req, res)=>{
    res.send('<h1>Hello</h1>')
});

//* PORT
const PORT = process.env.PORT || 8080;
//* Listening on port
app.listen(PORT, ()=>{
    console.log(`Express Application Running on: ${PORT} in ${process.env.DEV_MODE} mode`.bgGreen);
})

//* Listing all endpoints
console.log(expressListEndpoints(app))