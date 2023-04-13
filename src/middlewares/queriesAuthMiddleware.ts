import { Response, Request, NextFunction } from "express";

export default function queriesAuthMiddleware
(req : Request, res : Response, next : NextFunction) {
    const { pesquisa, arquivados } = req.query;
    if (typeof pesquisa !== "string" && typeof pesquisa !== "undefined") {
        return res.status(400).send({
            mesage: "Tipo de Query de pesquisa inválida."
        });            
    };
    if (arquivados !== "true" && typeof arquivados !== "undefined") {
        return res.status(400).send({
            mesage: "A Query arquivados só pode ser true."
        });        
    };
    next();
};