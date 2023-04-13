import { Request, Response } from "express";
import { usersList } from "../database/dataBase";
import User from "../models/User";

export default function deleteUserController(req : Request, res : Response) {
    const loggedUserId : string = req.body.loggedUser.getUserId();
    const userIndex : number = usersList.getUserList().findIndex((user : User) => user.getUserId() === loggedUserId);
    usersList.deleteUser(userIndex);
    return res.status(200).send({ message: "Usuário excluído com sucesso!"});
};