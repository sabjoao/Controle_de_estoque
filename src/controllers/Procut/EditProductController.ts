import {Request, Response} from "express";
import { EditProductService } from "../../services/Product/EditProductService";
import { EditProductRequest } from "../../models/interfaces/Product/EditProductRequest";

class EditProcutController {
    async handle(request: Request, response: Response){
        const {amount,banner,description,name,value, product_id}: EditProductRequest = request.body;
        const editProductService = new EditProductService();
        const productEdited = editProductService.execute({name, amount, banner, description,value,product_id});
        return response.json(productEdited);
    }
}

export {EditProcutController}