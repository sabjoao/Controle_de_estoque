import prismaClient from "../../prisma";
import { EditProductRequest } from "../../models/interfaces/Product/EditProductRequest";

class EditProductService{
    async execute({name, value,description,banner,amount, product_id}: EditProductRequest){
        const productEdited = await prismaClient.product.update({
            where: {
                id: product_id
            },
            data: {
                name: name,
                value: value,
                description: description,
                banner: banner,
                amount: +amount
            }
        });
        return productEdited;
    }
}

export {EditProductService}