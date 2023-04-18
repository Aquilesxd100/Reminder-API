import { Application } from "express";
import authNewReminderMiddleware from "./middlewares/authNewReminderMiddleware";
import generateNewTokenMiddleware from "./middlewares/generateNewTokenMiddleware";
import loginAuthMiddleware from "./middlewares/loginAuthMiddleware";
import signUpAuthMiddleware from "./middlewares/signUpAuthMiddleware";
import validTokenMiddleware from "./middlewares/validTokenMiddleware";
import authUpdateReminderMiddleware from "./middlewares/authUpdateReminderMiddleware";
import queriesAuthMiddleware from "./middlewares/queriesAuthMiddleware";
import validReminderIdMiddleware from "./middlewares/validReminderIdMiddleware";

export default function registerMiddlewares(app : Application) {
    app.post("/newuser/:userName/:password", signUpAuthMiddleware);
    app.get("/login/:userName/:password", [loginAuthMiddleware, generateNewTokenMiddleware]);
    app.get("/username", validTokenMiddleware);
    app.delete("/deleteuser", validTokenMiddleware);

    app.post("/newreminder", [validTokenMiddleware, authNewReminderMiddleware]);
    app.put("/updatereminder/:reminderId", [validTokenMiddleware, validReminderIdMiddleware, authUpdateReminderMiddleware]);
    app.put("/archivereminder/:reminderId", [validTokenMiddleware, validReminderIdMiddleware]);
    app.delete("/deletereminder/:reminderId", [validTokenMiddleware, validReminderIdMiddleware]);
    app.get("/reminders", validTokenMiddleware, queriesAuthMiddleware);
};