export interface ReminderEditType {
    action : string | undefined,
    date: string | undefined,
    time: string | undefined,
    description : string | undefined
};
export interface ReminderType {
    action : string,
    date: string,
    time: string,
    description : string
};
export interface GetRemindersParamType {
    search: string | undefined,
    archived: true | undefined,
    userId: string
};