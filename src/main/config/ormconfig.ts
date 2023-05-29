import { DataSourceOptions } from "typeorm";
import { UsersEntity } from "../../app/shared/entities/usersEntity";
import { RemindersEntity } from "../../app/shared/entities/remindersEntity";
import { UsersAPITable1685369198662 } from "../../app/shared/migrations/1685369198662-UsersAPITable";
import { RemindersAPITable1685369212043 } from "../../app/shared/migrations/1685369212043-RemindersAPITable";
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
    migrations: [UsersAPITable1685369198662, RemindersAPITable1685369212043]
};
export default config;