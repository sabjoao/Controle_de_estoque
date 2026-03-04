import prismaClient from "../../prisma";
import { SaleProductRequest } from "../../models/interfaces/Sales/SaleProductRequest";

class SaleProductService{
    async execute({product_id, amount}: SaleProductRequest){

        if(!product_id || !amount){
            throw new Error("Missing arguments");
        }

        const productSale = await prismaClient.product.findFirst({
            where: {
                id: product_id
            },
        });

        if(productSale?.amount > amount && amount > 0){
            const newAmount = (productSale?.amount - amount);
            const saveSale = await prismaClient.product.update({
                where: {
                    id: product_id
                },
                data: {
                    id: product_id,
                    amount: newAmount
                },
                select: {
                    id: true,
                    name: true,
                    amount: true
                }
            });
            return saveSale;
        } else {
            throw new Error("The sale could not be completed");
        }
    }
}

export {SaleProductService}