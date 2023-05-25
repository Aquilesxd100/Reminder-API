import { DataSourceOptions } from "typeorm";
require('dotenv').config({ path: './../env' })
// import { UserEntity } from "./../models/UserEntity";
// import { ReminderEntity } from "./../models/ReminderEntity";
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
    //entities: [UserEntity, ReminderEntity],
    //migrations: [UserAPITables, ReminderAPITables]
};
export default config;