import { Application } from "express";
import registerMiddlewares from "./registerMiddlewares";
import registerRoutes from "./registerRoutes";
require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");

const app : Application = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.listen(
    port, () => console.log(`Aplicacao ativa escutando a porta ${port}.`)
);

registerMiddlewares(app);
registerRoutes(app);

// TESTES CLASSES
/* import User from "../src/models/User";
import UserList from "./models/UserList";
import Reminder from "./models/Reminder";

const usuario1 = new User("alex", "1234a");
const usuario2 = new User("fernando", "123a");
const dataBase = new UserList;
dataBase.addUser(usuario1);
dataBase.addUser(usuario2);
console.log(dataBase.getUserById("fernando")?.getReminders());
console.log("#####################")
const getUserFernando = dataBase.getUserById("fernando");
getUserFernando?.newReminder(new Reminder("escovar dentes", "20/15/2020", "20:20", "testeeee"));
usuario1.newReminder(new Reminder("tomar banho", "20/15/2020", "20:20", "testeeee"));
usuario2.newReminder(new Reminder("lavar o cachorro", "20/15/2020", "20:20", "testeeee"));
console.log(dataBase.getUserById("fernando")?.getReminders());
console.log("#####################")
usuario2.editReminder(1, { action: "teste", date: "06/06/12" });
console.log(dataBase.getUserById("fernando")?.getReminders()); */
//