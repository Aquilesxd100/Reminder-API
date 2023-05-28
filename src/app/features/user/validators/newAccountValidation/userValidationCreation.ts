import { userRepository } from "../../repository/userTypeOrmRepository";

export default async function userValidation(userNameParam : string): Promise<string | boolean> {
    let validation : string | boolean = true;
    if (userNameParam.length < 4) { validation = "O login precisa ter ao menos 4 dígitos." };
    if (userNameParam.length > 10) { validation = "O login pode ter no máximo 10 dígitos." };
    const dataBaseUsers = await userRepository.getUserByUserName(userNameParam);
    if(dataBaseUsers) {
        validation = "Esse login já existe.";
    };
    return validation;
};