import { Request, Response } from "express";
import loginController from "./controllers/loginController";
import remindersController from "./controllers/getRemindersController";
import createUserController from "./controllers/createUserController";
import deleteUserController from "./controllers/deleteUserController";
import createReminderController from "./controllers/createReminderController";

function registerRoutes(app : any) {
    app.post("/newuser/:userName/:password", createUserController);

    app.get("/login/:userName/:password", loginController);

    app.delete("/deleteuser", deleteUserController);

    app.get("/reminders", remindersController);

    // Criacao de Recado
    // recebe - token (com id usuario), infosRecado
    // retorna - recados usuario atualizado OU Erro
    app.post("/newreminder", createReminderController);

    // Edicao de Recado
    // recebe - token (com id usuario), id recado, NovasInfosRecado
    // retorna - recados usuario atualizado OU Erro
    app.put("", (req : Request, res : Response) => {

    });
    
    // Exclusao de Recado
    // recebe - token (com id usuario), id recado
    // retorna - recados usuario atualizado OU Erro
    app.delete("", (req : Request, res : Response) => {

    });

    // Arquivar/Desarquivar Recado
    // recebe - token (com id usuario), id recado
    // retorna - recados usuario atualizado OU Erro
    app.put("", (req : Request, res : Response) => {

    });
};
export default registerRoutes;