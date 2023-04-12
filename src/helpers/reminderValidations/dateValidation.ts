export default function dateValidation(date : string) : boolean {
    const dateArray : Array<string> = date.split("");
    if (date.length !== 10) {
        return false;
    };
    const day : number = Number(dateArray[0] + dateArray[1]);
    const month : number = Number(dateArray[3] + dateArray[4]);
    const year : number = Number(date.substring(6, 10));
    if (typeof day !== "number" || day > 31 || day <= 0) {
        return false;
    }
    else if (typeof month !== "number" || month > 12 || month <= 0) {
        return false;
    }
    else if (typeof year !== "number" || year > 2100 || year < 2023) {
        return false;
    }
    else if (dateArray[2] !== "/" || dateArray[5] !== "/") {
        return false;
    };
    return true;
};