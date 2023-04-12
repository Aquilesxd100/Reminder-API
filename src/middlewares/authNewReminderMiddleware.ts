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
        res.status(400).send({ message: "Tipo de um ou mais dados incorreto." });
    };
    const authAction : boolean | string = actionValidation(action);
    const authDate : boolean | string = dateValidation(date);
    const authTime : boolean | string = timeValidation(time);
    const authDescription : boolean | string = descriptionValidation(description);
    if(authAction !== true) return res.status(400).send({ message: authAction });
    if(authDate !== true) return res.status(400).send({ message: authDate });
    if(authTime !== true) return res.status(400).send({ message: authTime });
    if(authDescription !== true) return res.status(400).send({ message: authDescription });

    req.body.reminder.action = initialUpperLetter(action.toLowerCase());
    req.body.reminder.description = initialUpperLetter(description.toLowerCase());
    next();
};