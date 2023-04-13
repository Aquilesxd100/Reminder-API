import { Request, Response } from "express";
import loginController from "./controllers/loginController";
import remindersController from "./controllers/getRemindersController";
import createUserController from "./controllers/createUserController";
import deleteUserController from "./controllers/deleteUserController";
import createReminderController from "./controllers/createReminderController";
import deleteReminderController from "./controllers/deleteReminderController";

function registerRoutes(app : any) {
    app.post("/newuser/:userName/:password", createUserController);

    app.delete("/deleteuser", deleteUserController);

    app.get("/login/:userName/:password", loginController);

    app.post("/newreminder", createReminderController);

    app.delete("/deletereminder:reminderId", deleteReminderController);

    app.get("/reminders", remindersController);

    // Edicao de Recado
    // recebe - token (com id usuario), id recado, NovasInfosRecado
    // retorna - recados usuario atualizado OU Erro
    app.put("", (req : Request, res : Response) => {

    });

    // Arquivar/Desarquivar Recado
    // recebe - token (com id usuario), id recado
    // retorna - recados usuario atualizado OU Erro
    app.put("", (req : Request, res : Response) => {

    });
};
export default registerRoutes;