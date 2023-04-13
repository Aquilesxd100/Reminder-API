import { Response, Request, NextFunction } from "express";
import User from "../models/User";
import Reminder from "../models/Reminder";
import actionValidation from "../helpers/reminderValidations/actionValidation";
import dateValidation from "../helpers/reminderValidations/dateValidation";
import timeValidation from "../helpers/reminderValidations/timeValidation";
import descriptionValidation from "../helpers/reminderValidations/descriptionValidation";

export default function authUpdateReminderMiddleware
(req : Request, res : Response, next : NextFunction) {
    const { action, date, time, description } = req.body;
    const reminderId : string | undefined = req.params.reminderId;
    const loggedUser : User = req.body.loggedUser;
    const arrayAttributes : Array<any> = [action, date, time, description].filter((attribute) => attribute);
    if (typeof reminderId !== "string") return res.status(400).send({
        message: "Tipo do ID do recado inválido."
    });
    const indexReminder : number = loggedUser.getReminders().findIndex((reminder : Reminder) => reminder.getReminderId() === reminderId);
    if(indexReminder === -1) return res.status(404).send({
        message: "Não foi encontrado nenhum recado com esse ID."
    });
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
    req.body.updatedReminder = {
        reminderIndex: indexReminder,
        reminder: {
            action : action,
            date : date,
            time : time,
            description : description
        }
    };
    next();
};