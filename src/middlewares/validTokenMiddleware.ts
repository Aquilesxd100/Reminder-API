import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

export default function validTokenMiddleware
(req : any, res : Response, next : NextFunction) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(token == null) return res.status(401).send({ message: "Você não tem acesso a essa pagina." });
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error : any, user : any) => {
        if(error) return res.status(403).send({ message: "Você não tem mais acesso a essa pagina." });
        req.body.user = user;
    });
    next(); 
};