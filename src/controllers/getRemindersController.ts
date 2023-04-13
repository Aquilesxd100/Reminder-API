import { Request, Response } from "express";
import Reminder from "../models/Reminder";
import User from "../models/User";

export default function getRemindersController(req : Request, res : Response) {
    const loggedUser : User = req.body.loggedUser;
    const userReminders : Array<Reminder> = loggedUser.getReminders();
    return res.status(200).send(userReminders);
};