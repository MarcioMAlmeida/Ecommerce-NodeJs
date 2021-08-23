import { Router } from "express";

import { CreateProductController } from "./controllers/CreateProductController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserController } from "./controllers/ListUserController";

const router = Router();

const createProductController = new CreateProductController();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();

router.get("/", (req, res, next) => {
    res.status(200).send({
        message: 'Hello World!'
    })
});

router.post("/products", createProductController.handle);

router.post("/users", createUserController.handle);
router.get("/users", listUserController.handle);

export { router };