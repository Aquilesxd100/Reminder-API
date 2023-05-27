import { Response, Request } from "express";
import User from "../models/User";
import initialUpperLetter from "../helpers/initialUpperLetter";
import { RemindersEntity } from "../app/shared/entities/remindersEntity";

export default async function createReminderController(req : Request, res : Response) {
    const loggedUser : User = req.body.loggedUser;
    const newReminder : RemindersEntity = new RemindersEntity;
    newReminder.action = initialUpperLetter(req.body.action.toLowerCase());
    newReminder.date = req.body.date;
    newReminder.time = req.body.time;
    newReminder.description = initialUpperLetter(req.body.description.toLowerCase());
    newReminder.user_id = loggedUser.getUserId();
    await newReminder.save();
    return res.status(201).send({ message: "Recado criado com sucesso!" })
};

