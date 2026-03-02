import {Request, Response} from "express";
import { CreateProductService } from "../../services/Product/CreateProductService";
import { ProductRequest } from "../../models/interfaces/Product/ProductRequest";

class CreateProductController {
    async handle(request: Request, response: Response) {
        const {name, value, description, banner,amount, category_id, user_id, supplier_id}: ProductRequest = request.body;
        const createProductService = new CreateProductService();

        if(!request.file){
            throw new Error("Error sending image");
        } else {
            const {originalname, filename: banner} = request.file;
            const product = await createProductService.execute({
                name,
                value,
                description,
                banner,
                amount,
                category_id,
                user_id,
                supplier_id
            });
            return response.json(product);
        }
    }
}

export {CreateProductController}