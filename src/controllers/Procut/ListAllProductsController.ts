import {Request, Response} from "express";
import { ListAllProductsService } from "../../services/Product/ListAllProductsService";

class ListAllProductsController{
    async handle(request: Request, response: Response){
        const listProducts = new ListAllProductsService();
        const products = await listProducts.execute();
        return response.json(products);
    }
}

export {ListAllProductsController}