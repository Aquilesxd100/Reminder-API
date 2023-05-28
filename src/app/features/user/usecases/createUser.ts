import { UsersEntity } from "src/app/shared/entities/usersEntity";

export async function createUser
(userName : string, password : string) : Promise<void> {
    const newUser : UsersEntity = new UsersEntity();
    newUser.username = userName;
    newUser.password = password;
    await newUser.save();
};