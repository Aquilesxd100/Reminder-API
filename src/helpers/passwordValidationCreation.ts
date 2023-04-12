export default function passwordValidation(password : string):boolean | string {
    let validation : string | boolean = true;
    let auth : boolean = false;
    const numbers : string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const letters : string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if (password.length < 4) {
        validation = "Precisa ter ao menos 4 dígitos.";
    }
    for (let v = 0; v < numbers.length; v++) {
        if (password.search(numbers[v]) !== -1) {
            auth = true;  
        }
    }
    if (auth === false) {
        validation = "Precisa ter ao menos um número.";
    }
    auth = false;
    for (let v = 0; v < letters.length; v++) {
        if (password.search(letters[v]) !== -1) {
            auth = true;  
        }
    }
    if (auth === false) {
        validation = "Precisa ter ao menos uma letra.";
    }
    return validation;
}