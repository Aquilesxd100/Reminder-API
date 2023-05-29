import express, { Application } from "express";
import registerMiddlewares from "./main/server/routes/registerMiddlewares";
import registerRoutes from "./main/server/routes/registerRoutes";
import { pgHelper } from "./app/shared/helpers/pg-helper";
import { apiEnv } from "./app/envs/env";

const app : Application = express();
const cors = require("cors");
app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["PUT", "DELETE"]
}));
pgHelper.connect()
    .then(() => {
        app.listen(apiEnv.port, () =>
            console.log(`Aplicacao ativa escutando a porta ${apiEnv.port}.`)
        )
    }).catch((err) => console.log(err));  

registerMiddlewares(app);
registerRoutes(app);

