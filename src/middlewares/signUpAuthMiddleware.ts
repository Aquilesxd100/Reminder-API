import { Request, Response, NextFunction } from "express";
import userValidationCreation from "../helpers/newAccountValidation/userValidationCreation";
import passwordValidationCreation from "../helpers/newAccountValidation/passwordValidationCreation";

export default function signUpAuthMiddleware
(req : Request, res : Response, next : NextFunction) {  
    let { userName, password } = req.params;
    if (typeof userName !== "string" || typeof password !== "string") {
        res.status(400).send({ message: "Tipo de dado(s) incorreto." })
    };
    userName = userName.toLowerCase();
    const userNameAuth = userValidationCreation(userName);
    const passwordAuth = passwordValidationCreation(password);
    if(userNameAuth !== true) return res.status(400).send({ message: userNameAuth });
    if(passwordAuth !== true) return res.status(400).send({ message: passwordAuth });
    next();
};