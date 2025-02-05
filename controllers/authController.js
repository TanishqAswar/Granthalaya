//!REQUEST HANDLERS

import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import userModel from '../models/userModel.js'
import JWT from 'jsonwebtoken'

// A authenticated user wants to make a authorized request

// Registering User
export const registerController = async (rq, rs) => {
    try {
        const {name, email, password, phone, address} = rq.body;

        if(!name){
            rs.send({message:"Name is required"})
        }   
        if(!email){
            rs.send({message:"Email is required"})
        }
        if(!password){
            rs.send({message:"Password is required"})
        }
        if(!phone){
            rs.send({message:"Phone is required"})
        }
        if(!address){
            rs.send({message:"Address is required"})
        }

        // Check User
        const existingUser = await userModel.findOne({email})

        if(existingUser){
            return rs.status(200).send({
                success : false,
                message : "You are Already registered, Please Login!"
            })
        }

        // New user
        const hashedPassword = await hashPassword(password);

        // save new user
        new userModel({name, email, password:hashedPassword, phone, address}).save().then((SavedUser)=>{
            rs.status(201).send({
                success:true,
                message: "User Registration Succesfull",
                SavedUser
            })
        });


    } catch (error) {
        console.log(error)
        rs.send(500).send({
            success : false,
            message : `Error in Registration`,
            error
        });
    }
}

// Login User
export const loginController = async (rq, rs) => {
    const {email, password} = rq.body;
    if(!email || !password){
        return rs.status(400).send({
            success: false,
            msg : "Invalid Inputs",
        })
    }

    // email -> primary key | user <-> email
    // I have email and password
    const user = await userModel.findOne({email});
    if(!user){
        return rs.send({
            success: false,
            msg: "Invalid email"
        })
    }
    const pass_match = comparePassword(password, user.password);
    if(!pass_match){
        return rs.send({
            success : false,
            msg: "Invalid Password",
        })
    }

    // email and password are valid and map to a registered user
    const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"});

    rs.status(200).send({ // this is actually present in res.data
        success: true,
        msg: "Successful Login",
        user: {
            ...(user._doc),
        },      
        token        
    })

}

// Test Contrl
export function testController(rq, rs){
    rs.status(200).send("Route Protected");
}