import { ReminderEditType } from "../types/types";
import crypto from "crypto";
import Reminder from "./OldReminder";

export default class User {
    private id: string = crypto.randomUUID();
    private reminders: Array<Reminder> = [];
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
    newReminder(reminder : Reminder) {
        this.reminders.push(reminder);
    };
    deleteReminder(reminderIndex : number) {
        this.reminders.splice(reminderIndex, 1);
    };
    editReminder(reminderIndex : number, newInfos : ReminderEditType) {
        const originalReminder : Reminder = this.reminders[reminderIndex];
        this.reminders[reminderIndex] = new Reminder(
            newInfos.action || originalReminder.getAction(),
            newInfos.date || originalReminder.getDate(),
            newInfos.time || originalReminder.getTime(),
            newInfos.description || originalReminder.getDescription(),
            originalReminder.getReminderId(),
            originalReminder.getArchivedStatus()
        );
    };
};