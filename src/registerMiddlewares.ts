import generateNewTokenMiddleware from "./middlewares/generateNewTokenMiddleware";
import loginAuthMiddleware from "./middlewares/loginAuthMiddleware";
import validTokenMiddleware from "./middlewares/validTokenMiddleware";

export default function registerMiddlewares(app : any) {
    app.get("/reminders", validTokenMiddleware);

    app.get("/login/:userName/:password", [loginAuthMiddleware, generateNewTokenMiddleware]);


};