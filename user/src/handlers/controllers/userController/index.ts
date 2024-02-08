import userLogin from './userLogin'
import signup from './userSignup'

export default (dependencies: any) => {
    return {
        signupController: signup(dependencies),
        loginController: userLogin(dependencies)
    }
}