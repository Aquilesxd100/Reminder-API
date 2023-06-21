import { DataSource } from "typeorm";
import { dataSource } from "../../../main/database/typeorm";
import { testDataSource } from "../../../main/database/testtypeorm";
import { reminderRepository } from "../../features/reminder/repository/remindersTypeOrmRepository";
import { userRepository } from "../../features/user/repository/userTypeOrmRepository";


export const pgHelper = {
    client: null as unknown as DataSource,
    async connect(testMode? : boolean): Promise<void> {
        this.client = testMode 
        ? testDataSource
        : dataSource;
        await this.client.initialize();
        reminderRepository.setRepository();
        userRepository.setRepository();
    },
    async disconnect() : Promise<void> {
        await this.client.destroy();
        this.client = null as any
    }
};