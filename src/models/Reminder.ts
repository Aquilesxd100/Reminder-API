import crypto from "crypto";

export default class Reminder {
    constructor(
        private action : string,
        private date: string,
        private time: string,
        private description : string,
        private id : string = crypto.randomUUID(),
        private archived : boolean = false
    ){      
    }
    getReminderId() {
        return this.id;
    };
    getAction() {
        return this.action;
    };
    getDate() {
        return this.date;
    };
    getTime() {
        return this.time;
    };
    getDescription() {
        return this.description;
    };
    getArchivedStatus() {
        return this.archived;
    }
    changeArchivedStatus() {
        this.archived = this.archived ? false : true;
    };
};