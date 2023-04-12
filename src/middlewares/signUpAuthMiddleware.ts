import { Request, Response, NextFunction } from "express";
import userValidationCreation from "../helpers/userValidationCreation";
import passwordValidationCreation from "../helpers/passwordValidationCreation";

export default function signUpAuthMiddleware
(req : Request, res : Response, next : NextFunction) {  
    const { userName, password } = req.params;
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