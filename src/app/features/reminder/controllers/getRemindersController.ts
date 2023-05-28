import { Request, Response } from "express";
import Reminder from "../../../models/Reminder";
import User from "../../../models/User";
import getUserReminders from "../usecases/getUserReminders";
import { GetRemindersParamType } from "../types/types";

export default async function getRemindersController(req : Request, res : Response) {
    const { search, archived } = req.query;
    const loggedUser : User = req.body.loggedUser;
    const getRemindersParams : GetRemindersParamType = {
        search: search as string,
        archived: archived as unknown as true,
        userId: loggedUser.getUserId() 
    };
    const userReminders : Array<Reminder> = await getUserReminders(getRemindersParams);
    return res.status(200).send(userReminders);
};