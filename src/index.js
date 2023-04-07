"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes"));
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.listen(port, () => console.log(`Aplicacao ativa escutando a porta ${port}.`));
(0, routes_1.default)(app);
//
const User_1 = require("../src/models/User");
const usuario = new User_1.User("fernando", "123a");
usuario.newReminder({ action: "tomar banho", id: "123", date: "20/15/2020", description: "testeeee", time: "20:20" });
console.log(usuario);
usuario.editReminder(0, { action: "teste" });
console.log(usuario);
