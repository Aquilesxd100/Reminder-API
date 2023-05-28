export default function actionValidation(action : string) : boolean | string {
    if (action.length > 21 || action.length === 0) {
        return "O campo de Ação deve ter ao menos 1 caractere e no máximo 21.";
    };
    return true;
};