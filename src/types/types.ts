export interface ReminderType {
    id : string,
    action : string,
    date: string,
    time: string,
    description : string
};
export interface ReminderEditType {
    action? : string,
    date?: string,
    time?: string,
    description? : string
};