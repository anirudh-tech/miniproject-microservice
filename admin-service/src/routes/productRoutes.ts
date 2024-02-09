import { Router } from "express";
import { productController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies"

const router: Router = Router();
const {addProductController} = productController(dependencies)


router.route('/add-product')
    .post(addProductController);

export default router;