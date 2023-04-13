import { Response, Request } from "express";
import User from "../models/User";
import Reminder from "../models/Reminder";
import initialUpperLetter from "../helpers/initialUpperLetter";

export default function createReminderController(req : Request, res : Response) {
    const loggedUser : User = req.body.loggedUser;
    const newReminder : Reminder = new Reminder(
        initialUpperLetter(req.body.reminder.action.toLowerCase()),
        req.body.reminder.date,
        req.body.reminder.time,
        initialUpperLetter(req.body.reminder.description.toLowerCase())
    );
    loggedUser.newReminder(newReminder);
    res.status(201).send({ message: "Recado criado com sucesso!" })
};

