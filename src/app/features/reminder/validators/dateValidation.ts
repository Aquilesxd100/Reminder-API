export default function dateValidation(date : string) : boolean | string {
    const dateArray : Array<string> = date.split("");
    if (date.length !== 10) {
        return "Formato de data incorreto.";
    };
    const day : number = Number(dateArray[0] + dateArray[1]);
    const month : number = Number(dateArray[3] + dateArray[4]);
    const year : number = Number(date.substring(6, 10));
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return "Formato de um ou mais dados incorreto.";
    };
    if (day > 31 || day <= 0) {
        return "Valor de dia incorreto.";
    }
    else if (month > 12 || month <= 0) {
        return "Valor de mês incorreto.";
    }
    else if (year > 2100 || year < 2023) {
        return "Valor de ano incorreto.";
    }
    else if (dateArray[2] !== "/" || dateArray[5] !== "/") {
        return "Formato de data incorreto.";
    };
    return true;
};