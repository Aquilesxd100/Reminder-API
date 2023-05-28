import { Response, Request } from "express";
import { RemindersEntity } from "../../../shared/entities/remindersEntity";
import changeArchiveStatus from "../usecases/changeArchiveStatus";

export default async function archiveReminderController(req : Request, res : Response) {
    const reminder : RemindersEntity = req.body.reminderEntity;
    const responseMessage : string = await changeArchiveStatus(reminder);
    return res.status(200).send({ message: responseMessage });
};