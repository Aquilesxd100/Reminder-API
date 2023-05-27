import { Response, Request, NextFunction } from "express";
import { authEnv } from "../../../envs/env";
import jwt from "jsonwebtoken";

export default function generateNewTokenMiddleware
(req : Request, res : Response, next : NextFunction) {
    const userId : string = req.body.loggedUser.getUserId();
    const newToken : string = jwt.sign({userId: userId}, authEnv, 
    { expiresIn: '15d' });
    req.body.accessToken = newToken;
    next();
};