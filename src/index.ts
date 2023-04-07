import registerRoutes from "./routes";

const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.listen(
    port, () => console.log(`Aplicacao ativa escutando a porta ${port}.`)
);


registerRoutes(app);

// TESTES CLASSES
import { User } from "../src/models/User";
const usuario = new User("fernando", "123a");
usuario.newReminder({ action: "tomar banho", id: "123", date: "20/15/2020", description: "testeeee", time: "20:20" });
console.log(usuario)
usuario.editReminder(0, { action: "teste" });
console.log(usuario)
//