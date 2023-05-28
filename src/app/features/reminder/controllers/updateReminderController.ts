import { Response, Request } from "express";
import { ReminderEditType } from "../types/types";
import { RemindersEntity } from "../../../shared/entities/remindersEntity";
import updateReminder from "../usecases/updateReminder";

export default async function updateReminderController(req : Request, res : Response) {
    const reminder : RemindersEntity = req.body.reminderEntity;
    const updatedReminder : ReminderEditType = req.body.updatedReminder;
    await updateReminder(reminder, updatedReminder);
    return res.status(200).send({ message: "Recado atualizado com sucesso." });
};