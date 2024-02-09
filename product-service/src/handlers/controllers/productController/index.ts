import productList from "./productList";

export default (dependencies: any) => {
    return {
        productListController: productList(dependencies)
    }
}