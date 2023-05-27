import { Request, Response } from "express";
import { UsersEntity } from "../../shared/entities/usersEntity";

export default async function deleteUserController(req : Request, res : Response) {
    const loggedUserEntity : UsersEntity = req.body.loggedUserEntity;
    await UsersEntity.remove(loggedUserEntity);
    return res.status(200).send({ message: "Usuário excluído com sucesso!"});
};