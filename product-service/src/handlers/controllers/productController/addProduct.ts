import { NextFunction, Request, Response } from "express";
import { productCreatedProducer } from "../../../kafka/producers/productCreatedProducer";

export default (dependencies: any)  => {
    const {productUseCases:{addProduct}} = dependencies;

    const addProductController = async (req: Request, res: Response, next: NextFunction) => {

        try {
            const data = req.body;
            const addedProduct = await addProduct(dependencies).interactor(data);

            await productCreatedProducer(addedProduct);
            res.status(201).json({success: true , data: addedProduct, message: "product added successfully"});
        } catch (error) {
           next(error);
        }
    }
    return addProductController;
}