import { Response, Request } from "express";
import { ReminderEditType } from "../types/types";
import { RemindersEntity } from "../app/shared/entities/remindersEntity";

export default async function updateReminderController(req : Request, res : Response) {
    const reminder : RemindersEntity = req.body.reminderEntity;
    const updateReminder : ReminderEditType = req.body.updatedReminder;
    reminder.action = updateReminder.action ? updateReminder.action : reminder.action;
    reminder.date = updateReminder.date ? updateReminder.date : reminder.date;
    reminder.time = updateReminder.time ? updateReminder.time : reminder.time;
    reminder.description = updateReminder.description ? updateReminder.description : reminder.description;
    await reminder.save();
    return res.status(200).send({ message: "Recado atualizado com sucesso." });
};