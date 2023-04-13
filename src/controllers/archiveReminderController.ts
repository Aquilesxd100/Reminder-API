import { Response, Request } from "express";
import User from "../models/User";
import Reminder from "../models/Reminder";

export default function archiveReminderController(req : Request, res : Response) {
    const reminderId : string = req.params.reminderId;
    const loggedUser : User = req.body.loggedUser;
    if (typeof reminderId !== "string") return res.status(400).send({ message: "ID do recado inválido." })
    const reminderIndex : number = loggedUser.getReminders().findIndex((reminder : Reminder) => reminder.getReminderId() === reminderId);
    if(reminderIndex === -1) return res.status(404).send({ message: "Nenhum recado com esse ID foi encontrado." });
    loggedUser.getReminder(reminderIndex).changeArchivedStatus();
    if(loggedUser.getReminder(reminderIndex).getArchivedStatus()) {
        res.status(200).send({ message: "Recado arquivado com sucesso!" });
    };
    res.status(200).send({ message: "Recado desarquivado com sucesso!" });
};