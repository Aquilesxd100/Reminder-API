import express, { Application } from "express";
require('dotenv').config({ path: './env/.env' });
import registerMiddlewares from "./registerMiddlewares";
import registerRoutes from "./registerRoutes";

const app : Application = express();
const cors = require("cors");
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["PUT", "DELETE"]
}));

registerMiddlewares(app);
registerRoutes(app);


app.listen(
    port, () => console.log(`Aplicacao ativa escutando a porta ${port}.`)
);
