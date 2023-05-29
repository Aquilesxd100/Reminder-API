import { UsersEntity } from "../../../shared/entities/usersEntity";
import { userRepository } from "../repository/userTypeOrmRepository";

export default async function createUser
(userName : string, password : string) : Promise<void> {
    const newUser : UsersEntity = new UsersEntity();
    newUser.username = userName;
    newUser.password = password;
    await userRepository.createUser(newUser);
};