import { DataSourceOptions } from "typeorm";
require('dotenv').config({ path: './../env' })
// import { UserEntity } from "./../models/UserEntity";
// import { ReminderEntity } from "./../models/ReminderEntity";

const config : DataSourceOptions = {
    type: "postgres",
    url: process.env.DATABASE_URL
}