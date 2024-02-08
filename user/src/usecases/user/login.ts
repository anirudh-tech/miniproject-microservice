export default (dependencies: any) => {
    const {userRepositories:{userLogin}} = dependencies;
    if (!userLogin) {
        throw new Error('Dependency is required for login!');
    }

    const interactor = async (email: string) => {
        return await userLogin(email)
    }

    return {interactor}
}