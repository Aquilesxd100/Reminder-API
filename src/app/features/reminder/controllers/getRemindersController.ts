import { Request, Response } from "express";
import Reminder from "../../../models/Reminder";
import User from "../../../models/User";
import { RemindersEntity } from "../../../shared/entities/remindersEntity";

export default async function getRemindersController(req : Request, res : Response) {
    const { search, archived } = req.query;
    const loggedUser : User = req.body.loggedUser;
    const userRemindersDB : Array<RemindersEntity> = await RemindersEntity.find(
        { where: { user_id: loggedUser.getUserId() }
    });
    let userReminders : Array<Reminder> = userRemindersDB.map((reminderDB) => {
        return new Reminder(reminderDB);
    });
    if (!archived) {
        userReminders = userReminders.filter((reminder : Reminder) => !reminder.getArchivedStatus());
    };
    if (typeof search === "string") {
        const lsSearch : string = search.toLowerCase();
        userReminders = userReminders.filter((reminder : Reminder) => {
            if (reminder.getAction().toLowerCase().indexOf(lsSearch) !== -1) {
                return reminder;
            }
            else if (reminder.getDescription().toLowerCase().indexOf(lsSearch) !== -1) {
                return reminder;
            };
        });
    };
    return res.status(200).send(userReminders);
};