import { Request, Response, NextFunction } from "express";
import { usersList } from "../database/dataBase";
const jwt = require("jsonwebtoken");

export default function validTokenMiddleware
(req : Request, res : Response, next : NextFunction) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    let jwtCheck : boolean = true;
    if(token == null) return res.status(401).send({ message: "Você não tem acesso a essa pagina." });
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error : any, user : any) => {
        if(error) jwtCheck = false;
        req.body.loggedUser = usersList.getUserById(user.userId);
        if(!req.body.loggedUser) jwtCheck = false;
    });
    if(!jwtCheck) return res.status(403).send({ message: "Você não tem acesso a essa pagina." });
    next(); 
};