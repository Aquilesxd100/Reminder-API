import { Request, Response } from "express";
import { UsersEntity } from "../../../shared/entities/usersEntity";
import { deleteUser } from "../usecases/deleteUser";

export default async function deleteUserController(req : Request, res : Response) {
    const loggedUserEntity : UsersEntity = req.body.loggedUserEntity;
    await deleteUser(loggedUserEntity);
    return res.status(200).send({ message: "Usuário excluído com sucesso!"});
};