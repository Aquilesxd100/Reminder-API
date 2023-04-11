import crypto from "crypto";

export default class Reminder {
    constructor(
        public action : string,
        public date: string,
        public time: string,
        public description : string,
        public id : string = crypto.randomUUID(),
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