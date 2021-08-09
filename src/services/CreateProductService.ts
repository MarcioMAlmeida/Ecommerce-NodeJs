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
        const productsRepository = getCustomRepository(ProductsRepositories);

        if (!name) {
            throw new Error("Invalid name!");
        }

        const productAlreadyExists = await productsRepository.findOne({
            name
        })

        if (productAlreadyExists) {
            throw new Error("Product already exists!");
        }

        const product = productsRepository.create({
            name,
            description,
            cost,
            quantity
        });

        await productsRepository.save(product);

        return product;

    }
}

export { CreateProductService }


