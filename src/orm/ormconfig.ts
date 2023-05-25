require('dotenv').config({ path: './../env' })
import { DataSourceOptions } from "typeorm";
import { UsersEntity } from "../app/shared/entities/usersEntity";
import { RemindersEntity } from "../app/shared/entities/remindersEntity";
import { UsersAPITable } from "./migrations/UsersAPITable";
import { RemindersAPITable } from "./migrations/RemindersAPITable";

const config : DataSourceOptions = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: false,
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [UsersEntity, RemindersEntity],
    migrations: [UsersAPITable, RemindersAPITable]
};
export default config;