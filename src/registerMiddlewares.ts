import authNewReminderMiddleware from "./middlewares/authNewReminderMiddleware";
import generateNewTokenMiddleware from "./middlewares/generateNewTokenMiddleware";
import loginAuthMiddleware from "./middlewares/loginAuthMiddleware";
import signUpAuthMiddleware from "./middlewares/signUpAuthMiddleware";
import validTokenMiddleware from "./middlewares/validTokenMiddleware";

export default function registerMiddlewares(app : any) {
    app.post("/newuser/:userName/:password", signUpAuthMiddleware);

    app.get("/login/:userName/:password", [loginAuthMiddleware, generateNewTokenMiddleware]);

    app.delete("/deleteuser", validTokenMiddleware);

    app.post("/newreminder", [validTokenMiddleware, authNewReminderMiddleware]);

    app.get("/reminders", validTokenMiddleware);

};