import { Response, Request, NextFunction } from "express";
import actionValidation from "../actionValidation";
import dateValidation from "../dateValidation";
import timeValidation from "../timeValidation";
import descriptionValidation from "../descriptionValidation";
import initialUpperLetter from "../../../../shared/helpers/initialUpperLetter";

export default function validUpdateReminderMiddleware
(req : Request, res : Response, next : NextFunction) {
    const { action, date, time, description } = req.body;
    const arrayAttributes : Array<any> = [action, date, time, description].filter((attribute) => attribute);
    if (!arrayAttributes.length) { 
        return res.status(400).send({ message: "Informe ao menos um atributo do recado para atualizar." });
    };
    if (arrayAttributes.some((attribute) => typeof attribute !== "string")) {
        return res.status(400).send({ message: "Tipo de um ou mais atributos inválido." });
    };

    const authAction : boolean | string = action ? actionValidation(action) : true;
    const authDate : boolean | string = date ? dateValidation(date) : true;
    const authTime : boolean | string = time ? timeValidation(time) : true;
    const authDescription : boolean | string = description ? descriptionValidation(description) : true;

    if(authAction !== true) return res.status(400).send({ message: authAction });
    if(authDate !== true) return res.status(400).send({ message: authDate });
    if(authTime !== true) return res.status(400).send({ message: authTime });
    if(authDescription !== true) return res.status(400).send({ message: authDescription });
    const updateReminder = {
        action : action,
        date : date,
        time : time,
        description : description
    };
    if(updateReminder.action) {
        updateReminder.action = initialUpperLetter(updateReminder.action.toLowerCase());
    };
    if(updateReminder.description) {
        updateReminder.description = initialUpperLetter(updateReminder.description.toLowerCase());
    };
    req.body.updatedReminder = updateReminder;
    next();
};