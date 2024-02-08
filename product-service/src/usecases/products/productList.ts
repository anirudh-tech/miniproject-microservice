export default (dependencies:any) => {
    const {productRepositories:{productList}} = dependencies
    if(!productList) {
        throw new Error('Dependency is required for login!');
    }

    const interactor = async () => {
        return await productList()
    }

    return {interactor}
}