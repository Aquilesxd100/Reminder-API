import { DataSourceOptions } from "typeorm";
import { UsersEntity } from "../app/shared/entities/usersEntity";
import { RemindersEntity } from "../app/shared/entities/remindersEntity";
import { UsersAPITable1685060630654 } from "./migrations/1685060630654-UsersAPITable";
import { RemindersAPITable1685060638579 } from "./migrations/1685060638579-RemindersAPITable";
import { apiEnv } from "../env/env";

const config : DataSourceOptions = {
    type: "postgres",
    url: apiEnv.dbUrl,
    synchronize: false,
    logging: false,
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [UsersEntity, RemindersEntity],
    migrations: [UsersAPITable1685060630654, RemindersAPITable1685060638579]
};
export default config;