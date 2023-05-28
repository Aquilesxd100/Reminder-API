import { UsersEntity } from "src/app/shared/entities/usersEntity";
import { userRepository } from "../repository/userTypeOrmRepository";

export default async function deleteUser(loggedUserEntity : UsersEntity) : Promise<void> {
    await userRepository.deleteUser(loggedUserEntity)
};