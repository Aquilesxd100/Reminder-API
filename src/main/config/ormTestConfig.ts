import { DataSourceOptions } from "typeorm";
import { UsersEntity } from "../../app/shared/entities/usersEntity";
import { RemindersEntity } from "../../app/shared/entities/remindersEntity";
import { TestUsersAPITable1687356545768 } from "../../app/shared/migrations/1687356545768-TestUsersAPITable";
import { TestRemindersAPITable1687356565646 } from "../../app/shared/migrations/1687356565646-TestRemindersAPITable";
import { apiEnv } from "../../app/envs/env";
const testConfig : DataSourceOptions = {
    type: "postgres",
    url: apiEnv.testDbUrl,
    synchronize: false,
    logging: false,
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [UsersEntity, RemindersEntity],
    migrations: [TestUsersAPITable1687356545768, TestRemindersAPITable1687356565646]
};
export default testConfig;