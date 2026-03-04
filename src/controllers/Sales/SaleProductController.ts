import {Request, Response} from "express";
import { SaleProductService } from "../../services/Sales/SaleProductService";
import { SaleProductRequest } from "../../models/interfaces/Sales/SaleProductRequest";

class SaleProductController{
    async handle(request: Request, response: Response){
        const product_id = request.query.product_id as string;
        const {amount}:SaleProductRequest = request.body;

        const saleProductService = new SaleProductService();
        const saleProduct = await saleProductService.execute({product_id, amount});
        return response.json(saleProduct);
        
    }
}

export {SaleProductController}