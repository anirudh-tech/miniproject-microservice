import productList from "./productList";
import addProduct from "./addProduct";

export default (dependencies: any) => {
    return {
        productListController: productList(dependencies),
        addProductController: addProduct(dependencies)
    }
}