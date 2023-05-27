import { Request, Response, NextFunction } from "express";
import { UsersEntity } from "../../../shared/entities/usersEntity";
import { authEnv } from "../../../envs/env";
import User from "../../../models/User";
const jwt = require("jsonwebtoken");

export default async function authTokenMiddleware
(req : Request, res : Response, next : NextFunction) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    let jwtCheck : boolean = true;
    if(token == null) return res.status(401).send({ message: "Você não tem acesso a essa pagina." });
    await jwt.verify(token, authEnv, async (error : any, user : any) => {
        if(error) jwtCheck = false;
        if(user) {
            const dbUser = await UsersEntity.findOne({ where: { id: user.userId }});
            if(dbUser) {
                req.body.loggedUser = new User(dbUser);
                req.body.loggedUserEntity = dbUser;
            };
        }
        if(!req.body.loggedUser) jwtCheck = false;
    });
    if(!jwtCheck) return res.status(403).send({ message: "Você não tem acesso a essa pagina." });
    next(); 
};