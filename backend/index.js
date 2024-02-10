import express from 'express';
import { connectDB } from './db.js';
import User from './schema.js';
import bodyParser from 'body-parser';
import Jwt from 'jsonwebtoken';
import cors from 'cors';
import bcrypt from 'bcryptjs';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: "*",
}

app.use(cors(corsOptions));

const PORT = 4000;

connectDB();

app.get('/' , (req,res)=>{
    res.send("Home");
})


const createToken = async ()=>{

    // this is how , we generate token with the help of _id and some secret/private key....

    const token = await Jwt.sign({_id : "65c4b218f9460d9482f392ad"} , "mynameisAmanKumarTiwari"); 
    //  console.log(token);      // (un-comment me to display token on the console)

    // this is how , we verify token and extract data like _id , which we provided in sign method
    // with the help of token and secret/private key.............

    const userVar = await Jwt.verify(token , "mynameisAmanKumarTiwari");
     // console.log(userVar);   // (un-comment me to display _id on the console)


}

// here , we call that function to get exact information of token and user_id
        // createToken();

app.post('/signup' , async (req,res)=>{
    
    const {name , password , confirmPassword } = req.body;

    // let userData = new User({
    //     name,
    //     hashPassword,
    //     // confirmPassword
    // });

    
    const existingUser = await User.findOne({name});
    if(existingUser) res.send("User exists already");
    else{
            // const token = await userData.generateAuthToken();
            // console.log("The token part is : " , token);

            // res.cookie("jwt" , token , {
            //     expires: new Date(Date.now() + 100000),
            //     httpOnly:true
            //     // secure : true    // (this is for https only - when we deploy our project)
            // });

            // const salt = 10;
            // const hashPassword = await bcrypt.hash(password , salt);
            // const hashConfirmPassword = await bcrypt.hash(confirmPassword , salt);

            let userData = new User({
                name,
                password,
                confirmPassword
            });

            // controller go on to schema.js and there is a pre function (middleware) , which encrypts the password and confirmPassword and modifies the original password and hashPassword.....

            await userData.save().then(async ()=>{
                // console.log(userData);

                // by this below line , we are sending the token to the frontend user....with status code and message...
                res.status(201).json({message: "User created Successfully", token: await userData.generateAuthToken() , userId : userData._id});
            }).catch((err)=>{
                console.log("Error : " , err);
                res.status(500).send('Internal Server Error');
            });
    }
});


app.post('/login' , async (req,res)=>{
    
    const {name , password} = req.body;
    try{
        const existingUser = await User.findOne({name , password});
        
        if(existingUser){
            const token = await existingUser.generateAuthToken();
            console.log("The token part is : " , token);

            res.cookie("jwt" , token , {
                expires: new Date(Date.now() + 100000),
                httpOnly:true
                // secure : true    // (this is for https only - when we deploy our project)
            });
            res.status(200).json({message: 'login successful' , user: existingUser});
        }else{
            res.status(401).json({message : 'Invailid Credentials'});
        }
    }catch(err){
        console.log("Error : " , err);
        res.status(500).json({message: "Internal Server Error"});
    }
})


app.listen(PORT , (req,res)=>{
    console.log(`Server started at ${PORT}`);
})