import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../repositories/ProductsRepositories";
import { classToPlain } from "class-transformer";

class ListProductService {

    async execute() {
        const productsRepositories = getCustomRepository(ProductsRepositories);

        const products = await productsRepositories.find();

        return classToPlain(products);
    }

}

export { ListProductService }



