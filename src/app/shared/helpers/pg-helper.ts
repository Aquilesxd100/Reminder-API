import { DataSource } from "typeorm";
import { dataSource } from "../../../main/database/typeorm";
import { reminderRepository } from "../../features/reminder/repository/remindersTypeOrmRepository";
import { userRepository } from "../../features/user/repository/userTypeOrmRepository";


export const pgHelper = {
    client: null as unknown as DataSource,
    async connect(): Promise<void> {
        this.client = dataSource;
        await this.client.initialize();
        reminderRepository.setRepository();
        userRepository.setRepository();
    },
    async disconnect() : Promise<void> {
        await this.client.destroy();
        this.client = null as any
    }
};