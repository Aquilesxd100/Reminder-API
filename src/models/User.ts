import { ReminderEditType, ReminderType } from "../types/types";
import crypto from "crypto";

export default class User {
    private id: string = crypto.randomUUID();
    private reminders: Array<ReminderType> = [];
    constructor(
        private userName: string,
        private password: string,
        ){
    };
    getUserId() {
        return this.id;
    };
    getUserName() {
        return this.userName;
    };
    getPassword() {
        return this.password;
    };
    getReminders() {
        return this.reminders;
    };
    getReminder(indexReminder : number) {
        return this.reminders[indexReminder];
    };
    newReminder(reminder : ReminderType) {
        this.reminders.push(reminder);
    };
    deleteReminder(reminderIndex : number) {
        this.reminders.splice(reminderIndex, 1);
    };
    editReminder(reminderIndex : number, newInfos : ReminderEditType) {
        const originalReminder : ReminderType = this.reminders[reminderIndex];
        this.reminders[reminderIndex] = {
            id : originalReminder.id,
            action : newInfos.action || originalReminder.action,
            date: newInfos.date || originalReminder.date,
            time: newInfos.time || originalReminder.time,
            description : newInfos.description || originalReminder.description
        };
    };
};