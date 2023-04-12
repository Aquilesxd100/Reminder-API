import { Request, Response, NextFunction } from "express";
import initialUpperLetter from "../helpers/initialUpperLetter";
import actionValidation from "../helpers/reminderValidations/actionValidation";
import dateValidation from "../helpers/reminderValidations/dateValidation";
import timeValidation from "../helpers/reminderValidations/timeValidation";
import descriptionValidation from "../helpers/reminderValidations/descriptionValidation";

export default function authNewReminderMiddleware
(req : Request, res : Response, next : NextFunction) {
    let { action, date, time, description } = req.body.reminder;
    if([action, date, time, description].some((att) => typeof att !== "string")) {
        res.status(400).send({ message: "Dado enviado incorreto." });
    };
    action = initialUpperLetter(action.toLowerCase());
    description = initialUpperLetter(description.toLowerCase());

    const authAction : boolean = actionValidation(action);
    const authDate : boolean = dateValidation(date);
    const authTime : boolean = timeValidation(time);
    const authDescription : boolean = descriptionValidation(description);
    if(!authAction || !authDate || !authTime || !authDescription) {
        return res.status(400).send({ message: "Dado enviado incorreto." })
    };
    next();
};