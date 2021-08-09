import { Router } from "express";

import { CreateProductController } from "./controllers/CreateProductController";

const router = Router();

const createProductController = new CreateProductController();

router.get("/", (req, res, next) => {
    res.status(200).send({
        message: 'Hello World!'
    })
});

router.post("/products", createProductController.handle);

export { router };