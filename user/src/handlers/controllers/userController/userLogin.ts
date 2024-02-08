import { compare } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import generateToken from "../../../util/jwt/generateToken";


export default (dependencies: any) => {
    const {userUseCases: {login}} = dependencies;
    const userLogin = async(req: Request, res: Response, next: NextFunction): Promise <void> => {
        try {
            const {email, password} = req.body
            const user = await login(dependencies).interactor(email);
            console.log(password,"password");
            console.log(req.body,"body");
            console.log(user,"user");
            

            if(!user){
                throw new Error("user doesn't exist")
            }

            const match = await compare(password, user.password)

            if(!match) {
                throw new Error("password is incorrect")
            }

            const token = generateToken({
                userId: user._id,
                userEmail: user.email,
                isAdmin: user.isAdmin,
                isBlocked: user.isBlocked
            });
    
            res.cookie("auth", token, {
                maxAge: 1000*60*60*24,
                httpOnly: true
            })

            res.status(201).json({success:true, data: user, message: "user-logged in "})
        } catch (error) {
            next(error)
        }
    } 
    return userLogin;
}