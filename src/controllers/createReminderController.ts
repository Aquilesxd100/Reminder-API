import { Response, Request } from "express";
import User from "../models/User";
import { usersList } from "../database/dataBase";
import Reminder from "../models/Reminder";

export default function createReminderController(req : Request, res : Response) {
    const loggedUser : User | undefined = usersList.getUserById(req.body.loggedUser);
    const newReminder : Reminder = new Reminder(
        req.body.reminder.action,
        req.body.reminder.date,
        req.body.reminder.time,
        req.body.reminder.description
    );
    loggedUser?.newReminder(newReminder);
    res.status(201).send({ message: "Recado criado com sucesso!" })
};

