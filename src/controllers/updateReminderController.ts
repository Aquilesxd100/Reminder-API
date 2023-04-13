import { Response, Request } from "express";
import User from "../models/User";
import { ReminderEditType } from "../types/types";
import initialUpperLetter from "../helpers/initialUpperLetter";

export default function updateReminderController(req : Request, res : Response) {
    const loggedUser : User = req.body.loggedUser;
    const updateReminderIndex : number = req.body.updatedReminder.reminderIndex;
    const updateReminder : ReminderEditType = req.body.updatedReminder.reminder;
    if(updateReminder.action) {
        updateReminder.action = initialUpperLetter(updateReminder.action.toLowerCase());
    };
    if(updateReminder.description) {
        updateReminder.description = initialUpperLetter(updateReminder.description.toLowerCase());
    };
    loggedUser.editReminder(updateReminderIndex, updateReminder);
};