import { Application } from "express";
import validNewReminderMiddleware from "../../../app/features/reminder/validators/middlewares/validNewReminderMiddleware";
import loginAuthMiddleware from "../../../app/features/user/validators/middlewares/loginAuthMiddleware";
import signUpValidMiddleware from "../../../app/features/user/validators/middlewares/signUpValidMiddleware";
import authTokenMiddleware from "../../../app/features/auth/validators/middlewares/authTokenMiddleware";
import validUpdateReminderMiddleware from "../../../app/features/reminder/validators/middlewares/validUpdateReminderMiddleware";
import validQueriesMiddleware from "../../../app/features/reminder/validators/middlewares/validQueriesMiddleware";
import validReminderIdMiddleware from "../../../app/features/reminder/validators/middlewares/validReminderIdMiddleware";

export default function registerMiddlewares(app : Application) {
    app.post("/newuser/:userName/:password", signUpValidMiddleware);
    app.delete("/deleteuser", authTokenMiddleware);
    app.get("/username", authTokenMiddleware);
    app.get("/login/:userName/:password", loginAuthMiddleware);

    app.post("/newreminder", [authTokenMiddleware, validNewReminderMiddleware]);
    app.put("/updatereminder/:reminderId", [authTokenMiddleware, validReminderIdMiddleware, validUpdateReminderMiddleware]);
    app.put("/archivereminder/:reminderId", [authTokenMiddleware, validReminderIdMiddleware]);
    app.delete("/deletereminder/:reminderId", [authTokenMiddleware, validReminderIdMiddleware]);
    app.get("/reminders", authTokenMiddleware, validQueriesMiddleware);
};