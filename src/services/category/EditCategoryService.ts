import prismaClient from "../../prisma";
import { EditCategoryRequest } from "../../models/interfaces/category/EditCategoryRequest";

class EditCategoryService {
    async execute({name, category_id}: EditCategoryRequest){
        if (category_id === "" || name === "" || !name || !category_id){
            throw new Error("Invalid arguments to edit category!");
        }

        const categoryEdit = await prismaClient.category.update({
            where: {
                id: category_id
            },
            data: {
                name: name
            },
        });
        return categoryEdit;
    }
}

export {EditCategoryService};