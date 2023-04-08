import crypto from "crypto";

export default class Reminder {
    private id : string = crypto.randomUUID();

    constructor(
        private action : string,
        private date: string,
        private time: string,
        private description : string
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
};