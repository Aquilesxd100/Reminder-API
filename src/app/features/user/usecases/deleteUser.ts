import { RemindersEntity } from "src/app/shared/entities/remindersEntity";
import { UsersEntity } from "../../../shared/entities/usersEntity";
import { userRepository } from "../repository/userTypeOrmRepository";
import { reminderRepository } from "../../reminder/repository/remindersTypeOrmRepository";

export default async function deleteUser(loggedUserEntity : UsersEntity) : Promise<void> {
    const userReminders : Array<RemindersEntity> = await reminderRepository.getRemindersEntityByUserId(loggedUserEntity.id as string);
    
    if (userReminders.length) {
        await reminderRepository.deleteReminders(userReminders);
    };
    await userRepository.deleteUser(loggedUserEntity)
};