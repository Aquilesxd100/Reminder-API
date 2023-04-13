import { Request, Response } from "express";

export default function loginController(req : Request, res : Response) {
    return res.status(200).send({ 
        message: "Usuário logado com sucesso!",
        token: req.body.accessToken
    });
};