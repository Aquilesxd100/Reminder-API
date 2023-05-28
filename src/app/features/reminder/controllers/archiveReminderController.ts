import { Response, Request } from "express";
import { RemindersEntity } from "../../../shared/entities/remindersEntity";

export default async function archiveReminderController(req : Request, res : Response) {
    const reminder : RemindersEntity = req.body.reminderEntity;
    if(!reminder.archived) {
        reminder.archived = true;
        await reminder.save();
        return res.status(200).send({ message: "Recado arquivado com sucesso!" });
    };
    reminder.archived = false;
    await reminder.save();
    return res.status(200).send({ message: "Recado desarquivado com sucesso!" });
};