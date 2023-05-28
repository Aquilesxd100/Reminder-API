import { Application } from "express";
import authNewReminderMiddleware from "../../../app/features/reminder/validators/middlewares/validNewReminderMiddleware";
import loginAuthMiddleware from "../../../app/features/user/validators/middlewares/loginAuthMiddleware";
import signUpAuthMiddleware from "../../../app/features/user/validators/middlewares/signUpValidMiddleware";
import validTokenMiddleware from "../../../app/features/auth/validators/middlewares/authTokenMiddleware";
import authUpdateReminderMiddleware from "../../../app/features/reminder/validators/middlewares/validUpdateReminderMiddleware";
import queriesAuthMiddleware from "../../../app/features/reminder/validators/middlewares/validQueriesMiddleware";
import validReminderIdMiddleware from "../../../app/features/reminder/validators/middlewares/validReminderIdMiddleware";

export default function registerMiddlewares(app : Application) {
    app.post("/newuser/:userName/:password", signUpAuthMiddleware);
    app.get("/login/:userName/:password", loginAuthMiddleware);
    app.get("/username", validTokenMiddleware);
    app.delete("/deleteuser", validTokenMiddleware);

    app.post("/newreminder", [validTokenMiddleware, authNewReminderMiddleware]);
    app.put("/updatereminder/:reminderId", [validTokenMiddleware, validReminderIdMiddleware, authUpdateReminderMiddleware]);
    app.put("/archivereminder/:reminderId", [validTokenMiddleware, validReminderIdMiddleware]);
    app.delete("/deletereminder/:reminderId", [validTokenMiddleware, validReminderIdMiddleware]);
    app.get("/reminders", validTokenMiddleware, queriesAuthMiddleware);
};