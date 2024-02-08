export default (dependencies: any) => {
    const {
      cartRepositories: { addToCart },
    } = dependencies;
    if (!addToCart) {
      throw new Error("Missing add to cart dependency");
    }
  
    const interactor = async (data: any) => {
      return await addToCart(data);
    };
    return { interactor };
  };