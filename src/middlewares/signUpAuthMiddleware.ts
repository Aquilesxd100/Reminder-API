import { Request, Response, NextFunction } from "express";
import userValidationCreation from "../helpers/newAccountValidation/userValidationCreation";
import passwordValidationCreation from "../helpers/newAccountValidation/passwordValidationCreation";

export default function signUpAuthMiddleware
(req : Request, res : Response, next : NextFunction) {  
    let { userName, password } = req.params;
    if(typeof userName !== "string" || typeof password !== "string") {
        res.status(400).send({ message: "Dado enviado incorreto." })
    };
    userName = userName.toLowerCase();
    const userNameAuth = userValidationCreation(userName);
    const passwordAuth = passwordValidationCreation(password);
    if(userNameAuth !== true || passwordAuth !== true) {
        res.status(400).send({
            userNameError: userNameAuth,
            passwordError: passwordAuth
        });
    };
    next();
};