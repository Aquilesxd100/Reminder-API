export default function initialUpperLetter(text : string) : string {
    text = text.toLowerCase();
    let firstLetter = text.substring(0, 1);
    return text.replace(firstLetter, (firstLetter.toUpperCase()));
};