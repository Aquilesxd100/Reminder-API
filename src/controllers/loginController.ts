import { Request, Response } from "express";
import { usersList } from "../database/dataBase";

export default function loginController(req : Request, res : Response) {
    return res.status(200).json({ token: req.body.accessToken, user: req.body.user });
};