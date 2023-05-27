import { Request, Response, NextFunction } from "express";
import actionValidation from "../../validators/reminderValidations/actionValidation";
import dateValidation from "../../validators/reminderValidations/dateValidation";
import timeValidation from "../../validators/reminderValidations/timeValidation";
import descriptionValidation from "../../validators/reminderValidations/descriptionValidation";

export default function validNewReminderMiddleware
(req : Request, res : Response, next : NextFunction) {
    let { action, date, time, description } = req.body;
    if([action, date, time, description].some((att) => typeof att !== "string")) {
        return res.status(400).send({ message: "Tipo de um ou mais dados incorreto." });
    };
    const authAction : boolean | string = actionValidation(action);
    const authDate : boolean | string = dateValidation(date);
    const authTime : boolean | string = timeValidation(time);
    const authDescription : boolean | string = descriptionValidation(description);
    if(authAction !== true) return res.status(400).send({ message: authAction });
    if(authDate !== true) return res.status(400).send({ message: authDate });
    if(authTime !== true) return res.status(400).send({ message: authTime });
    if(authDescription !== true) return res.status(400).send({ message: authDescription });
    next();
};