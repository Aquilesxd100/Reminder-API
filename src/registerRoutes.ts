import { Application } from "express";
import loginController from "./controllers/loginController";
import remindersController from "./controllers/getRemindersController";
import createUserController from "./controllers/createUserController";
import deleteUserController from "./controllers/deleteUserController";
import createReminderController from "./controllers/createReminderController";
import deleteReminderController from "./controllers/deleteReminderController";
import updateReminderController from "./controllers/updateReminderController";
import archiveReminderController from "./controllers/archiveReminderController";
import getUserNameController from "./controllers/getUserNameController";

function registerRoutes(app : Application) {
    app.post("/newuser/:userName/:password", createUserController);
    app.delete("/deleteuser", deleteUserController);
    app.get("/login/:userName/:password", loginController);
    app.get("/username", getUserNameController);

    app.post("/newreminder", createReminderController);
    app.put("/updatereminder/:reminderId", updateReminderController);
    app.put("/archivereminder/:reminderId", archiveReminderController);
    app.delete("/deletereminder/:reminderId", deleteReminderController);
    app.get("/reminders", remindersController);
};
export default registerRoutes;