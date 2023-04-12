import { Request, Response } from "express";
import { usersList } from "../database/dataBase";

export default function deleteUserController(req : Request, res : Response) {
    const loggedUserId : string = req.body.loggedUser;
    usersList.deleteUserById(loggedUserId);
    return res.status(200).send({ message: "Usuário excluído com sucesso!"});
};