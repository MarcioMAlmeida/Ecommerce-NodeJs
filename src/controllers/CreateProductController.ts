import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";

class CreateProductController {
    async handle(request: Request, response: Response) {
        const { name, description, cost, quantity } = request.body;

        const createProductService = new CreateProductService();

        const product = await createProductService.execute({ name, description, cost, quantity });

        return response.json(product);

    }
}

export { CreateProductController }

