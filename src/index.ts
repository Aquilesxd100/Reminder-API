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
/* import User from "../src/models/User";
import UserList from "./models/UserList";
const usuario1 = new User("alex", "1234a");
const usuario2 = new User("fernando", "123a");
const dataBase = new UserList;
dataBase.addUser(usuario1);
dataBase.addUser(usuario2);
console.log(dataBase.getUserById("fernando")?.getReminders());
console.log("#####################")
const getUserFernando = dataBase.getUserById("fernando");
getUserFernando?.newReminder({ action: "escovar dentes", id: "123", date: "20/15/2020", description: "testeeee", time: "20:20" });
console.log(dataBase.getUserById("fernando")?.getReminders());
 */
/* usuario1.newReminder({ action: "escovar dentes", id: "123", date: "20/15/2020", description: "testeeee", time: "20:20" });
usuario2.newReminder({ action: "tomar banho", id: "123", date: "20/15/2020", description: "testeeee", time: "20:20" });
usuario2.editReminder(0, { action: "teste" });
console.log(usuario2); */
//