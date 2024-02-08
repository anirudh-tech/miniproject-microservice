export default (dependencies: any) => {
    console.log('inside signup useCase')
    const { userRepositories: {userSignupRepo} } = dependencies

    if (!userSignupRepo) {
        throw new Error('Dependency is required for signup!');
    }

    const interactor = async (
        credentials: {
            name: string,
            email: string,
            password?: string
        }
    ) => {
        return await userSignupRepo(credentials)
    }

    return {interactor}
}