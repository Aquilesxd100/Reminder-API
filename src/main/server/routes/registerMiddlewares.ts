import { Application } from "express";
import authNewReminderMiddleware from "../../../app/features/middlewares/validators/validNewReminderMiddleware";
import generateNewTokenMiddleware from "../../../app/features/middlewares/authentication/generateNewTokenMiddleware";
import loginAuthMiddleware from "../../../app/features/middlewares/authentication/loginAuthMiddleware";
import signUpAuthMiddleware from "../../../app/features/middlewares/validators/signUpValidMiddleware";
import validTokenMiddleware from "../../../app/features/middlewares/authentication/authTokenMiddleware";
import authUpdateReminderMiddleware from "../../../app/features/middlewares/validators/validUpdateReminderMiddleware";
import queriesAuthMiddleware from "../../../app/features/middlewares/validators/validQueriesMiddleware";
import validReminderIdMiddleware from "../../../app/features/middlewares/validators/validReminderIdMiddleware";

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