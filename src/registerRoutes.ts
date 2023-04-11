import { Request, Response } from "express";
import loginController from "./controllers/loginController";
import remindersController from "./controllers/remindersController";

function registerRoutes(app : any) {
    // Login 
    // recebe - infosConta
    // retorna - tokenTemporario + tokenRefresh + id usuario OU Erro
    app.get("/login/:userName/:password", loginController);

    // Criacao de Conta
    // recebe - infosNovaConta
    // retorna - mensagem de sucesso OU Erro
    app.post("/newuser/:userName/:password", (req : Request, res : Response) => {

    });

    // Exclusao de Conta
    // recebe - id usuario
    // retorna - mensagem de sucesso OU Erro
    app.post("", (req : Request, res : Response) => {

    });

    // Listar Recados
    // recebe - id usuario
    // retorna - tokenTemporario + tokenRefresh + id usuario OU Erro
    app.get("/reminders", remindersController);

    // Criacao de Recado
    // recebe - id usuario, infosRecado
    // retorna - mensagem de sucesso OU Erro
    app.post("", (req : Request, res : Response) => {

    });

    // Edicao de Recado
    // recebe - id usuario, id recado, NovasInfosRecado
    // retorna - usuario atualizado (completo)??? OU Erro
    app.put("", (req : Request, res : Response) => {

    });
    
    // Exclusao de Recado
    // recebe - id usuario, id recado
    // retorna - usuario atualizado (completo)??? OU Erro
    app.delete("", (req : Request, res : Response) => {

    });
};
export default registerRoutes;