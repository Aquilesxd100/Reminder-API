export default function timeValidation(time : string) : boolean | string {
    const timeArray : Array<string> = time.split("");
    if (time.length !== 5) {
        return "Formato de horário inválido.";
    };
    const hour : number = Number(timeArray[0] + timeArray[1]);
    const minute : number = Number(timeArray[3] + timeArray[4]);
    if (typeof hour !== "number" || typeof minute !== "number") {
        return "Tipo de um ou mais dados invalido(s).";
    };
    if (hour > 23 || hour < 0) {
        return "Valor de hora incorreto.";
    }
    else if (minute > 59 || minute < 0) {
        return "Valor de minuto incorreto.";
    }
    else if (timeArray[2] !== ":") {
        return "Formato de horário inválido.";
    };
    return true;
};