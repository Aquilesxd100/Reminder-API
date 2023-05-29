import { RemindersEntity } from "../../../shared/entities/remindersEntity";
import { reminderRepository } from "../repository/remindersTypeOrmRepository";

export default async function changeArchiveStatus
(reminder : RemindersEntity) : Promise<string> {
    if(!reminder.archived) {
        reminder.archived = true;
        await reminderRepository.saveReminder(reminder);
        return "Recado arquivado com sucesso!";
    };
    reminder.archived = false;
    await reminderRepository.saveReminder(reminder);
    return "Recado desarquivado com sucesso!";
};