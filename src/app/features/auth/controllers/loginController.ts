import { Request, Response } from "express";
import generateNewToken from "../usecases/generateNewToken";
import User from "src/app/models/User";

export default async function loginController(req : Request, res : Response) {
    const user : User = req.body.loggedUser;
    const newToken : string = generateNewToken(user.getUserId());
    return res.status(200).send({ 
        message: "Usuário logado com sucesso!",
        token: newToken
    });
};