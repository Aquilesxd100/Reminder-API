import { Request, Response, NextFunction } from "express";
import userValidationCreation from "../newAccountValidation/userValidationCreation";
import passwordValidationCreation from "../newAccountValidation/passwordValidationCreation";

export default async function signUpValidMiddleware
(req : Request, res : Response, next : NextFunction) {  
    let { userName, password } = req.params;
    if (typeof userName !== "string" || typeof password !== "string") {
        return res.status(400).send({ message: "Tipo de dado(s) incorreto." })
    };
    userName = userName.toLowerCase();
    const userNameAuth = await userValidationCreation(userName);
    const passwordAuth = passwordValidationCreation(password);
    if(userNameAuth !== true) return res.status(400).send({ message: userNameAuth });
    if(passwordAuth !== true) return res.status(400).send({ message: passwordAuth });
    next();
};