export default (dependencies: any) => {
    const {cartRepositories:{getCart}} = dependencies;

    if(!getCart){
        throw new Error('Missing getCart dependency in cartDetailsController');
    }

    const interactor = async (
        data:any
    ) => {
        return await getCart(data)
    }
    return {interactor}

}