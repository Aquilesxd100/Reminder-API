import { Request, Response } from "express";
import { usersList } from "../database/dataBase";
import User from "../models/User";
import Reminder from "../models/Reminder";

export default function deleteReminderController(req : Request, res : Response) {
    const reminderId : string = req.params.reminderId;
    const loggedUser : User = req.body.loggedUser;
    if (typeof reminderId !== "string") return res.status(400).send({ message: "ID do recado inválido." })
    const reminderIndex : number = loggedUser.getReminders().findIndex((reminder : Reminder) => reminder.getReminderId() === reminderId);
    if(reminderIndex === -1) return res.status(404).send({ message: "Nenhum recado com esse ID foi encontrado." });
    loggedUser.deleteReminder(reminderIndex);
    res.status(200).send({ message: "Recado excluído com sucesso!" });
};