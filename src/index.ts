import express, { Application } from "express";
import registerMiddlewares from "./main/server/routes/registerMiddlewares";
import registerRoutes from "./main/server/routes/registerRoutes";
import { pgHelper } from "./app/shared/helpers/pg-helper";
import { apiEnv } from "./app/envs/env";
import serverConfig from "./main/config/serverconfig";

const app : Application = express();

pgHelper.connect()
    .then(() => {
        serverConfig(app);
        registerMiddlewares(app);
        registerRoutes(app);
    })
    .then(() => {
        app.listen(apiEnv.port, () =>
            console.log(`Aplicacao ativa escutando a porta ${apiEnv.port}.`)
        )
    }).catch((err) => console.log(err));  

