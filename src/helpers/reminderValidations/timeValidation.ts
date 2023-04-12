export default function timeValidation(time : string) : boolean {
    const timeArray : Array<string> = time.split("");
    if (time.length !== 5) {
        return false;
    };
    const hour : number = Number(timeArray[0] + timeArray[1]);
    const minute : number = Number(timeArray[3] + timeArray[4]);
    if (typeof hour !== "number" || hour > 23 || hour < 0) {
        return false;
    }
    else if (typeof minute !== "number" || minute > 59 || minute < 0) {
        return false;
    }
    else if (timeArray[2] !== ":") {
        return false;
    };
    return true;
};