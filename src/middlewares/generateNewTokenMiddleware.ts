import { Response, Request, NextFunction } from "express";
const jwt = require("jsonwebtoken");

export default function generateNewTokenMiddleware
(req : Request, res : Response, next : NextFunction) {
    const userId : string = req.body.loggedUser.getUserId();
    const newToken : string = jwt.sign({userId: userId}, process.env.ACCESS_TOKEN_SECRET, 
    { expiresIn: '15d' });
    req.body.accessToken = newToken;
    next();
};