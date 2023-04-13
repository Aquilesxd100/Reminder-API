import { Response, Request } from "express";
import User from "../models/User";
import { ReminderEditType } from "../types/types";

export default function updateReminderController(req : Request, res : Response) {
    const loggedUser : User = req.body.loggedUser;
    const updateReminderIndex : number = req.body.updatedReminder.reminderIndex;
    const updateReminder : ReminderEditType = req.body.updatedReminder.reminder;
    loggedUser.editReminder(updateReminderIndex, updateReminder);
};