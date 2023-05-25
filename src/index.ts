import express, { Application } from "express";
require('dotenv').config({ path: './env/.env' });
import registerMiddlewares from "./registerMiddlewares";
import registerRoutes from "./registerRoutes";
import { pgHelper } from "./orm/pg-helper";

const app : Application = express();
const cors = require("cors");
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["PUT", "DELETE"]
}));
/* pgHelper.connect()
    .then(() => {
        app.listen(port, () =>
            console.log(`Aplicacao ativa escutando a porta ${port}.`)
        )
    }).catch((err) => console.log(err)); */

    app.listen(
        port, () => console.log(`Aplicacao ativa escutando a porta ${port}.`)
    );
    

registerMiddlewares(app);
registerRoutes(app);

