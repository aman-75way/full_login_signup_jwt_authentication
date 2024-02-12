import express from 'express';
import { connectDB } from './db.js';
// import User from './models/UserSchema.js';
import bodyParser from 'body-parser';
import Jwt from 'jsonwebtoken';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import { GetHome, userDetails, userLogin, userSignUp } from './controller/auth-controller.js';
import { authMiddleware } from './middleware/auth-middleware.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: "*",
}

app.use(cors(corsOptions));

const PORT = 4000;

connectDB();

app.get('/' , GetHome);


app.get('/userDetails' , authMiddleware , userDetails)


app.post('/signup' , userSignUp);


app.post('/login' , userLogin);


app.listen(PORT , (req,res)=>{
    console.log(`Server started at ${PORT}`);
})