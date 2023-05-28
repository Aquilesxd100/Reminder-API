import { Response, Request } from "express";
import createReminder from "../usecases/createReminder";

export default async function createReminderController(req : Request, res : Response) {
    await createReminder(req.body);
    return res.status(201).send({ message: "Recado criado com sucesso!" })
};

