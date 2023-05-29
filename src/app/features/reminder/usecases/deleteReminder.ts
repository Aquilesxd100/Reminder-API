import { RemindersEntity } from "../../../shared/entities/remindersEntity";
import { reminderRepository } from "../repository/remindersTypeOrmRepository";

export default async function deleteReminder(reminder : RemindersEntity) : Promise<void> {
    await reminderRepository.deleteReminder(reminder);
};