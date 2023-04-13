import { Request, Response } from "express";
import Reminder from "../models/Reminder";
import User from "../models/User";

export default function getRemindersController(req : Request, res : Response) {
    const { pesquisa, arquivados } = req.query;
    const loggedUser : User = req.body.loggedUser;
    let userReminders : Array<Reminder> = loggedUser.getReminders();
    if (arquivados) {
        userReminders = userReminders.filter((reminder : Reminder) => reminder.getArchivedStatus());
    };
    if (typeof pesquisa === "string") {
        userReminders = userReminders.filter((reminder : Reminder) => {
            if (reminder.getAction().indexOf(pesquisa) !== -1) {
                return reminder;
            }
            else if (reminder.getDescription().indexOf(pesquisa) !== -1) {
                return reminder;
            };
        });
    };
    return res.status(200).send(userReminders);
};