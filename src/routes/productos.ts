import { Router } from "express";
import ProductosController from "../controller/ProductosController";
import { checkRole } from "../middleware/role";
import { checkJwt } from "../middleware/jwt";

const routes= Router();


routes.get("",[checkJwt, checkRole (['admin'])], ProductosController.getAll)
routes.get("/getOne/:id", ProductosController.getOne)
routes.post("", ProductosController.create)
routes.put("/:id", ProductosController.update)
routes.delete("/:id", ProductosController.delete)


export default routes;

