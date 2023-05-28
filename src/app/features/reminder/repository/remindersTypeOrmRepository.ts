import { Repository } from "typeorm";
import { RemindersEntity } from "src/app/shared/entities/remindersEntity";
import { pgHelper } from "src/app/shared/helpers/pg-helper";
import Reminder from "src/app/models/Reminder";

class RemindersTypeOrmRepository {
    private reminderRepository : Repository<RemindersEntity>;
    
    constructor() {
        this.reminderRepository = pgHelper.client.manager.getRepository(RemindersEntity);
    };

    async getReminders(userID : string) : Promise<Array<Reminder>> {
        const allReminders : Array<RemindersEntity> = await this.reminderRepository.find({
            where: { user_id: userID }
        });
        return allReminders.map((reminderDB : RemindersEntity) => new Reminder(reminderDB))
    };

    async getReminderByID(reminderID : string) : Promise<RemindersEntity | null> {
        return await this.reminderRepository.findOne({
            where: { id : reminderID }
        });
    };

    async saveReminder(reminder : RemindersEntity) : Promise<void> {
        await reminder.save();
    };

    async deleteReminder(reminder : RemindersEntity) : Promise<void> {
        await reminder.remove();
    };
};

export const reminderRepository = new RemindersTypeOrmRepository;