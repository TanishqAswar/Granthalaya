import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireLogin = (rq, rs, next)=>{
    try {
        const decodedToken = JWT.verify(rq.headers.authorization, process.env.JWT_SECRET);
        rq.user = decodedToken;
        next();

    } catch (error) {
        rs.send({
            success : false,
            error
        })
    }
}

export const isAdmin = async (rq, rs, nxt) =>{
    try {
        const user = await userModel.findById(rq.user._id)
        if(user.role !== 1){
            rs.status(401).send({
                success : false,
                msg: "Your are not admin",
            })
        }

        nxt();

    } catch (error) {
        rs.status(401).send({
            success: false,
            msg: "Not Admin",
        })
    }
}