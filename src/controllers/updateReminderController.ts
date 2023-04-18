import { Response, Request } from "express";
import User from "../models/User";
import { ReminderEditType } from "../types/types";

export default function updateReminderController(req : Request, res : Response) {
    const loggedUser : User = req.body.loggedUser;
    const reminderIndex : number = req.body.reminderIndex;
    const updateReminder : ReminderEditType = req.body.updatedReminder;
    loggedUser.editReminder(reminderIndex, updateReminder);
    res.status(200).send({ message: "Recado atualizado com sucesso." });
};