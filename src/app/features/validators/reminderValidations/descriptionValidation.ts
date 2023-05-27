export default function descriptionValidation(description : string) : boolean | string {
    if (description.length > 66 || description.length === 0) {
        return "A Descrição precisa ter ao menos 1 caractere e no maximo 66.";
    };
    return true;
};