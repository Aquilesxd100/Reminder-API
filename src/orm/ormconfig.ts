import { DataSourceOptions } from "typeorm";
require('dotenv').config({ path: './../env' })
import { UsersEntity } from "../app/shared/entities/usersEntity";
import { RemindersEntity } from "../app/shared/entities/remindersEntity";
//
//

const config : DataSourceOptions = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: false,
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [UsersEntity, RemindersEntity],
    //migrations: [UserAPITables, ReminderAPITables]
};
export default config;