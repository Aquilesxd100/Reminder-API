import { Request, Response } from "express";
import User from "../models/User";

export default function deleteReminderController(req : Request, res : Response) {
    const loggedUser : User = req.body.loggedUser;
    const reminderIndex : number = req.body.reminderIndex;
    loggedUser.deleteReminder(reminderIndex);
    res.status(200).send({ message: "Recado excluído com sucesso!" });
};