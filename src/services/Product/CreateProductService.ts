import prismaClient from "../../prisma";
import { ProductRequest } from "../../models/interfaces/Product/ProductRequest";

class CreateProductService {

    async execute({ name, value, description, banner,amount, category_id, user_id, supplier_id }: ProductRequest) {
        const product = await prismaClient.product.create({
            data: {
                name: name,
                value: value,
                description: description,
                banner: banner,
                amount: +amount,

                category: {
                    connect: { id: category_id }
                },

                user: {
                    connect: { id: user_id }
                },

                ...(supplier_id && {
                    connect: { id: supplier_id }
                })
            }
        });
        return product;
    }

}

export { CreateProductService }