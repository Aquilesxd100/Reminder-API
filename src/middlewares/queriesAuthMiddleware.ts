import { Response, Request, NextFunction } from "express";

export default function queriesAuthMiddleware
(req : Request, res : Response, next : NextFunction) {
    const { search, archived } = req.query;
    if (typeof search !== "string" && typeof search !== "undefined") {
        return res.status(400).send({
            message: "Tipo de Query search inválida."
        });            
    };
    if (archived !== "true" && typeof archived !== "undefined") {
        return res.status(400).send({
            message: "A Query archived só pode ser true."
        });        
    };
    next();
};