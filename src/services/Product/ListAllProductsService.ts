import prismaClient from "../../prisma";

class ListAllProductsService{
    async execute(){
        const listProducts = await prismaClient.product.findMany({
            select: {
                name: true,
                value: true,
                description: true,
                banner: true,
                amount:true
            },
        });
        return listProducts;
    }
}

export {ListAllProductsService}