import { DataSourceOptions } from "typeorm";
import { UsersEntity } from "../../app/shared/entities/usersEntity";
import { RemindersEntity } from "../../app/shared/entities/remindersEntity";
import { UsersAPITable1685325301271 } from "../../app/shared/migrations/1685325301271-UsersAPITable";
import { RemindersAPITable1685325279944 } from "../../app/shared/migrations/1685325279944-RemindersAPITable";
import { apiEnv } from "../../app/envs/env";
const config : DataSourceOptions = {
    type: "postgres",
    url: apiEnv.dbUrl,
    synchronize: false,
    logging: false,
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [UsersEntity, RemindersEntity],
    migrations: [UsersAPITable1685325301271, RemindersAPITable1685325279944]
};
export default config;