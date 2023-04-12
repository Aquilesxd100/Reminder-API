export default function descriptionValidation(description : string) : boolean {
    if (description.length > 66 || description.length === 0) {
        return false;
    };
    return true;
};