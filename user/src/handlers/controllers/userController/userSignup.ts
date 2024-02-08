import { NextFunction, Request, Response } from "express";
import { hash } from "bcrypt";
import generateToken from "../../../util/jwt/generateToken";


export default (dependencies: any) => {
    const {userUseCases: {signup}} = dependencies;
    
    const createUser = async(req: Request, res: Response, next: NextFunction): Promise<void> => {

        try {
            const credentials = req.body
            
            const hashedPassword:  string | null = await hash(credentials.password, 10);
            credentials.password = hashedPassword;
            
            const user = await signup(dependencies).interactor(credentials)
    
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
            res.status(201).json({success: true , data: user, message: "user Created"});
            
        } catch (error: any) {
            next(error);
        }
    }
    return createUser;
}