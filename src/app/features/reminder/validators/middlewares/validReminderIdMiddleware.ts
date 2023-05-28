import { Request, Response, NextFunction } from "express";
import User from "../../../../models/User";
import { RemindersEntity } from "../../../../shared/entities/remindersEntity";
import { reminderRepository } from "../../repository/remindersTypeOrmRepository";

export default async function validReminderIdMiddleware
(req : Request, res : Response, next : NextFunction) {
    const reminderId : string = req.params.reminderId;
    const loggedUser : User = req.body.loggedUser;
    if (typeof reminderId !== "string" || reminderId.length !== 36) return res.status(400).send({ message: "ID do recado inválido." })
    const reminder : RemindersEntity | null = await reminderRepository.getReminderByID(reminderId);
    if(!reminder || reminder.user_id !== loggedUser.getUserId()) return res.status(404).send({ message: "Nenhum recado com esse ID foi encontrado." });
    req.body.reminderEntity = reminder;
    next();
};