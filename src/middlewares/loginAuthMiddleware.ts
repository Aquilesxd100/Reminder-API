import { Request, Response, NextFunction } from "express";
import { usersList } from "../database/dataBase";
import User from "../models/User";

export default function loginAuthMiddleware
(req : any, res : Response, next : NextFunction) {
    const { userName, password } = req.params;
    const currentUser : User | undefined = usersList.getUserByUserName(userName);
    if(!currentUser || currentUser.getPassword() !== password) {
        return res.status(400).send({ message: "Login ou senha incorreto." });
    };
    req.body.loggedUser = currentUser;
    next();
};