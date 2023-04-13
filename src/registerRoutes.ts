import { Request, Response, Application } from "express";
import loginController from "./controllers/loginController";
import remindersController from "./controllers/getRemindersController";
import createUserController from "./controllers/createUserController";
import deleteUserController from "./controllers/deleteUserController";
import createReminderController from "./controllers/createReminderController";
import deleteReminderController from "./controllers/deleteReminderController";
import updateReminderController from "./controllers/updateReminderController";

function registerRoutes(app : Application) {
    app.post("/newuser/:userName/:password", createUserController);
    app.delete("/deleteuser", deleteUserController);
    app.get("/login/:userName/:password", loginController);

    app.post("/newreminder", createReminderController);
    app.put("/updatereminder/:reminderId", updateReminderController);
    app.delete("/deletereminder/:reminderId", deleteReminderController);
    app.get("/reminders", remindersController);

    // Arquivar/Desarquivar Recado
    // recebe - token (com id usuario), id recado
    // retorna - recados usuario atualizado OU Erro
    app.put("", (req : Request, res : Response) => {

    });
};
export default registerRoutes;