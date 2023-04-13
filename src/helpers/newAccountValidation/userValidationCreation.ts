import { usersList } from "../../database/dataBase";
import User from "../../models/User";

export default function userValidation(userName : string):string | boolean {
    const dataBaseUsers = usersList.getUserList();
    let validation : string | boolean = true;
    
    if(dataBaseUsers.some((user : User) => user.getUserName() === userName)) {
        validation = "Esse login já existe.";
    };
    if (userName.length < 4) { validation = "O login precisa ter ao menos 4 dígitos." };
    if (userName.length > 10) { validation = "O login pode ter no máximo 10 dígitos." };
    return validation;
};