import { User } from "../../models/user";
import { UserEntity } from "../../../../entities";


export const userLogin = async(email: string): Promise<UserEntity | null> => {
    try {
        const existingUser = await User.findOne({email:email})
        if(!existingUser){
            throw new Error("No such user found")
        }
        return existingUser as UserEntity
    } catch (error:any) {
        throw new Error(error?.message)
    }
} 