import { Application } from "express";
import authNewReminderMiddleware from "./middlewares/authNewReminderMiddleware";
import generateNewTokenMiddleware from "./middlewares/generateNewTokenMiddleware";
import loginAuthMiddleware from "./middlewares/loginAuthMiddleware";
import signUpAuthMiddleware from "./middlewares/signUpAuthMiddleware";
import validTokenMiddleware from "./middlewares/validTokenMiddleware";
import authUpdateReminderMiddleware from "./middlewares/authUpdateReminderMiddleware";

export default function registerMiddlewares(app : Application) {
    app.post("/newuser/:userName/:password", signUpAuthMiddleware);
    app.get("/login/:userName/:password", [loginAuthMiddleware, generateNewTokenMiddleware]);
    app.delete("/deleteuser", validTokenMiddleware);

    app.post("/newreminder", [validTokenMiddleware, authNewReminderMiddleware]);
    app.put("/updatereminder:reminderId", [validTokenMiddleware, authUpdateReminderMiddleware]);
    app.delete("/deletereminder:reminderId", validTokenMiddleware);
    app.get("/reminders", validTokenMiddleware);

};