import { Request, Response } from "express";

export default function remindersController(req : Request, res : Response) {
    res.status(201).send({ message: "Sucesso!" });
};