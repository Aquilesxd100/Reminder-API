import { Request, Response } from "express";
import { RemindersEntity } from "../../../shared/entities/remindersEntity";
import deleteReminder from "../usecases/deleteReminder";

export default async function deleteReminderController(req : Request, res : Response) {
    const reminder : RemindersEntity = req.body.reminderEntity;
    await deleteReminder(reminder);
    return res.status(200).send({ message: "Recado excluído com sucesso!" });
};