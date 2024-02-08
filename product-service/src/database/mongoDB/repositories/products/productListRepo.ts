import { ProductEntity } from "../../../../enitites";
import { Product } from "../../models/product";

export const productList = async (): Promise< ProductEntity[] | null> => {
    try {
        const products = await Product.find({inStock:true})
        if(!productList) {
            throw new Error('cannot find products')
        }

        return products as ProductEntity[]
    } catch (error:any) {
        throw new Error(error?.message)
    }
    
}
