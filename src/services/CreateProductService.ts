import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../repositories/ProductsRepositories";

interface IProductRequest {
    name: string;
    description: string;
    cost: number;
    quantity: number;
}

class CreateProductService {

    async execute({ name, description, cost, quantity }: IProductRequest) {
        const productsRepositories = getCustomRepository(ProductsRepositories);

        if (!name || !description || !cost) {
            throw new Error("Invalid product!");
        }

    }
}

export { CreateProductService }


