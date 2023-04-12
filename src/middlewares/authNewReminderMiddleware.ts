import { Request, Response, NextFunction } from "express";
import initialUpperLetter from "../helpers/initialUpperLetter";

export default function authNewReminderMiddleware
(req : Request, res : Response, next : NextFunction) {
    let { action, date, time, description } = req.body.reminder;
    if([action, date, time, description].some((att) => typeof att !== "string")) {
        res.status(400).send({ message: "Dado enviado incorreto." });
    };

    action = initialUpperLetter(action.toLowerCase());
    description = initialUpperLetter(description.toLowerCase());
    next();
};