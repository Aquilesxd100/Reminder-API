import { Request, Response } from "express";
import createUser from "../usecases/createUser";

export default async function createUserController(req : Request, res : Response) {
    const { userName, password } = req.params;
    await createUser(userName, password);
    return res.status(201).send({ message: "Conta criada com sucesso!" });
};