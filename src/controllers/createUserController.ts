import { Request, Response } from "express";
import { usersList } from "../database/dataBase";
import User from "../models/User";

export default function createUserController(req : Request, res : Response) {
    const { userName, password } = req.params;
    const newUser : User = new User(userName, password);
    usersList.addUser(newUser);
    return res.status(201).send({ message: "Conta criada com sucesso!" });
};