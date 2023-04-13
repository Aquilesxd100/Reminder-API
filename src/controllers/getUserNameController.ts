import { Request, Response } from "express";

export default function getUserNameController(req : Request, res : Response) {
    res.status(200).send({ userName: req.body.loggedUser.getUserName() });
};