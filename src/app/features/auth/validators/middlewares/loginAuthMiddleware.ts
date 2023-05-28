import { Request, Response, NextFunction } from "express";
import User from "../../../../models/User";
import { userRepository } from "../../../user/repository/userTypeOrmRepository";

export default async function loginAuthMiddleware
(req : Request, res : Response, next : NextFunction) {
    const { userName, password } = req.params;
    if(typeof userName !== 'string' || typeof password !== 'string') {
        return res.status(400).send({ message: "Tipo de login e/ou senha invalido(s)." });
    };
    const currentUser : any = await userRepository.getUserByUserName(userName);
    if(!currentUser || currentUser.password !== password) {
        return res.status(400).send({ message: "Login e/ou senha incorreto(s)." });
    };
    req.body.loggedUser = new User(currentUser);
    next();
};