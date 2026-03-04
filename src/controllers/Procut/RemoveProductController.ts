import {Request, Response} from "express";
import { RemoveProductService } from "../../services/Product/RemoveProductService";

class RemoveProductController {
    async handle(request: Request, response: Response){
        const product_id = request.query.product_id as string;
        const removeProduct = new RemoveProductService();
        const productDeleted = removeProduct.execute({product_id});
        return response.json(productDeleted);
    }
}

export {RemoveProductController}