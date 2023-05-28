import { Request, Response } from "express";
import { UsersEntity } from "../../../shared/entities/usersEntity";

export default async function createUserController(req : Request, res : Response) {
    const { userName, password } = req.params;
    const newUser : UsersEntity = new UsersEntity();
    newUser.username = userName;
    newUser.password = password;
    await newUser.save();
    return res.status(201).send({ message: "Conta criada com sucesso!" });
};