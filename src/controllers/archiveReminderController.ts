import { Response, Request } from "express";
import User from "../models/User";

export default function archiveReminderController(req : Request, res : Response) {
    const loggedUser : User = req.body.loggedUser;
    const reminderIndex : number = req.body.reminderIndex;
    loggedUser.getReminder(reminderIndex).changeArchivedStatus();
    if(loggedUser.getReminder(reminderIndex).getArchivedStatus()) {
        return res.status(200).send({ message: "Recado arquivado com sucesso!" });
    };
    return res.status(200).send({ message: "Recado desarquivado com sucesso!" });
};