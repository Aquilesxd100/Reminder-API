import { Application } from "express";
import loginController from "../../../app/features/controllers/loginController";
import remindersController from "../../../app/features/controllers/getRemindersController";
import createUserController from "../../../app/features/controllers/createUserController";
import deleteUserController from "../../../app/features/controllers/deleteUserController";
import createReminderController from "../../../app/features/controllers/createReminderController";
import deleteReminderController from "../../../app/features/controllers/deleteReminderController";
import updateReminderController from "../../../app/features/controllers/updateReminderController";
import archiveReminderController from "../../../app/features/controllers/archiveReminderController";
import getUserNameController from "../../../app/features/controllers/getUserNameController";

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