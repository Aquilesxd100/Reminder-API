import express, { Application } from "express";
import "dotenv/config";
import registerMiddlewares from "./registerMiddlewares";
import registerRoutes from "./registerRoutes";

const app : Application = express();
const port = process.env.PORT || 4000;
app.use(express.json());

registerMiddlewares(app);
registerRoutes(app);
app.listen(
    port, () => console.log(`Aplicacao ativa escutando a porta ${port}.`)
);
