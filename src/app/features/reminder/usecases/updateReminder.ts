import { RemindersEntity } from "src/app/shared/entities/remindersEntity";
import { ReminderEditType } from "../types/types";
import { reminderRepository } from "../repository/remindersTypeOrmRepository";

export default async function updateReminder
(reminder : RemindersEntity, updatedReminder : ReminderEditType) : Promise<void> {
    reminder.action = updatedReminder.action ? updatedReminder.action : reminder.action;
    reminder.date = updatedReminder.date ? updatedReminder.date : reminder.date;
    reminder.time = updatedReminder.time ? updatedReminder.time : reminder.time;
    reminder.description = updatedReminder.description ? updatedReminder.description : reminder.description;
    await reminderRepository.saveReminder(reminder);
};