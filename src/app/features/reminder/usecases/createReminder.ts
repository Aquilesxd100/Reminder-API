import User from "../../../models/User";
import { RemindersEntity } from "../../../shared/entities/remindersEntity";
import initialUpperLetter from "../../../shared/helpers/initialUpperLetter";
import { reminderRepository } from "../repository/remindersTypeOrmRepository";

export default async function createReminder(requestInfos : any) : Promise<void> {
    const loggedUser : User = requestInfos.loggedUser;
    const newReminder : RemindersEntity = new RemindersEntity;
    newReminder.action = initialUpperLetter(requestInfos.action.toLowerCase());
    newReminder.date = requestInfos.date;
    newReminder.time = requestInfos.time;
    newReminder.description = initialUpperLetter(requestInfos.description.toLowerCase());
    newReminder.user_id = loggedUser.getUserId();
    await reminderRepository.saveReminder(newReminder);
};