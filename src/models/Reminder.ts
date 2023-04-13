import crypto from "crypto";

export default class Reminder {
    private archived : boolean = false;
    constructor(
        private action : string,
        private date: string,
        private time: string,
        private description : string,
        private id : string = crypto.randomUUID(),
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
    changeArchivedStatus() {
        this.archived = this.archived ? false : true;
    };
};