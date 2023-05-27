export default class Reminder {
    private action : string;
    private date: string;
    private time: string;
    private description : string;
    private id : string;
    private archived : boolean;
    constructor(reminderDB: any){     
        this.action = reminderDB.action;
        this.date = reminderDB.date;
        this.time = reminderDB.time;
        this.description = reminderDB.description;
        this.id = reminderDB.id;
        this.archived = reminderDB.archived;
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