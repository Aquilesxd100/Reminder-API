import { Application } from "express";
import loginController from "../../../app/features/auth/controllers/loginController";
import remindersController from "../../../app/features/reminder/controllers/getRemindersController";
import createUserController from "../../../app/features/user/controllers/createUserController";
import deleteUserController from "../../../app/features/user/controllers/deleteUserController";
import createReminderController from "../../../app/features/reminder/controllers/createReminderController";
import deleteReminderController from "../../../app/features/reminder/controllers/deleteReminderController";
import updateReminderController from "../../../app/features/reminder/controllers/updateReminderController";
import archiveReminderController from "../../../app/features/reminder/controllers/archiveReminderController";
import getUserNameController from "../../../app/features/user/controllers/getUserNameController";

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