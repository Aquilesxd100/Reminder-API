import express, { Application } from "express";
import registerMiddlewares from "./main/server/routes/registerMiddlewares";
import registerRoutes from "./main/server/routes/registerRoutes";
import { pgHelper } from "./app/shared/helpers/pg-helper";
import { apiEnv } from "./app/envs/env";
import serverConfig from "./main/config/serverconfig";

export const app : Application = express();

export const connection = async (testMode? : boolean | undefined) => 
    await pgHelper.connect(testMode)
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

connection();

