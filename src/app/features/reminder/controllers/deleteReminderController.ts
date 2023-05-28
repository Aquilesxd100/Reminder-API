import { Request, Response } from "express";
import { RemindersEntity } from "../../../shared/entities/remindersEntity";

export default async function deleteReminderController(req : Request, res : Response) {
    const reminder : RemindersEntity = req.body.reminderEntity;
    await reminder.remove();
    return res.status(200).send({ message: "Recado excluído com sucesso!" });
};