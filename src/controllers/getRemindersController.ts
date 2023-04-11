import { Request, Response } from "express";
import Reminder from "../models/Reminder";
import User from "../models/User";

export default function getRemindersController(req : Request, res : Response) {
    const loggedUser : User | undefined = req.body.loggedUser;
    if(!loggedUser) return res.status(404).send({ message: "Usuario não existe." });
    const userReminders : Array<Reminder> = loggedUser.getReminders();
    return res.status(200).send(userReminders);
};