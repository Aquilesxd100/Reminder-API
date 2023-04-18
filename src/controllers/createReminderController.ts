import { Response, Request } from "express";
import User from "../models/User";
import Reminder from "../models/Reminder";
import initialUpperLetter from "../helpers/initialUpperLetter";

export default function createReminderController(req : Request, res : Response) {
    const loggedUser : User = req.body.loggedUser;
    const newReminder : Reminder = new Reminder(
        initialUpperLetter(req.body.action.toLowerCase()),
        req.body.date,
        req.body.time,
        initialUpperLetter(req.body.description.toLowerCase())
    );
    loggedUser.newReminder(newReminder);
    return res.status(201).send({ message: "Recado criado com sucesso!" })
};

