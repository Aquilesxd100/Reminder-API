export default function actionValidation(action : string) : boolean {
    if (action.length > 21 || action.length === 0) {
        return false;
    };
    return true;
};