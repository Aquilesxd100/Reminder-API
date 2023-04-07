"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const crypto_1 = __importDefault(require("crypto"));
class User {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
        this.id = crypto_1.default.randomUUID();
        this.reminders = [];
    }
    ;
    getUserId() {
        return this.id;
    }
    ;
    getUserName() {
        return this.userName;
    }
    ;
    getPassword() {
        return this.password;
    }
    ;
    getReminders() {
        return this.reminders;
    }
    ;
    getReminder(indexReminder) {
        return this.reminders[indexReminder];
    }
    ;
    newReminder(reminder) {
        this.reminders.push(reminder);
    }
    ;
    deleteReminder(reminderIndex) {
        this.reminders.splice(reminderIndex, 1);
    }
    ;
    editReminder(reminderIndex, newInfos) {
        const originalReminder = this.reminders[reminderIndex];
        this.reminders[reminderIndex] = {
            id: originalReminder.id,
            action: newInfos.action || originalReminder.action,
            date: newInfos.date || originalReminder.date,
            time: newInfos.time || originalReminder.time,
            description: newInfos.description || originalReminder.description
        };
    }
    ;
}
exports.User = User;
;
