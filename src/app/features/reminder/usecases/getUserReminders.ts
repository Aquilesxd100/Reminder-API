import Reminder from "src/app/models/Reminder";
import { reminderRepository } from "../repository/remindersTypeOrmRepository";
import { GetRemindersParamType } from "../types/types";

export default async function getUserReminders
(getRemindersParams : GetRemindersParamType) : Promise<Array<Reminder>> {
    let userReminders : Array<Reminder> = await reminderRepository.getRemindersByUserId(getRemindersParams.userId);
    if (!getRemindersParams.archived) {
        userReminders = userReminders.filter((reminder : Reminder) => !reminder.getArchivedStatus());
    };
    if (typeof getRemindersParams.search === "string") {
        const lsSearch : string = getRemindersParams.search.toLowerCase();
        userReminders = userReminders.filter((reminder : Reminder) => {
            if (reminder.getAction().toLowerCase().indexOf(lsSearch) !== -1) {
                return reminder;
            }
            else if (reminder.getDescription().toLowerCase().indexOf(lsSearch) !== -1) {
                return reminder;
            };
        });
    };
    return userReminders;
};