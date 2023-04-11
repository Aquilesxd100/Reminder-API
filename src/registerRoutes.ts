import { Request, Response } from "express";
import loginController from "./controllers/loginController";
import remindersController from "./controllers/getRemindersController";

function registerRoutes(app : any) {
    // Login 
    // recebe - infosConta (login/senha por params)
    // retorna - token (com id usuario) OU Erro
    app.get("/login/:userName/:password", loginController);

    // Criacao de Conta
    // recebe - infosNovaConta (login/senha por params)
    // retorna - mensagem de sucesso OU Erro
    app.post("/newuser/:userName/:password", (req : Request, res : Response) => {

    });

    // Exclusao de Conta
    // recebe - token (com id usuario)
    // retorna - mensagem de sucesso OU Erro
    app.delete("", (req : Request, res : Response) => {

    });

    // Listar Recados
    // recebe - token (com id usuario)
    // retorna - recados do usuario OU Erro
    app.get("/reminders", remindersController);

    // Criacao de Recado
    // recebe - token (com id usuario), infosRecado
    // retorna - recados usuario atualizado OU Erro
    app.post("", (req : Request, res : Response) => {

    });

    // Edicao de Recado
    // recebe - token (com id usuario), id recado, NovasInfosRecado
    // retorna - recados usuario atualizado OU Erro
    app.put("", (req : Request, res : Response) => {

    });
    
    // Exclusao de Recado
    // recebe - token (com id usuario), id recado
    // retorna - recados usuario atualizado OU Erro
    app.delete("", (req : Request, res : Response) => {

    });

    // Arquivar/Desarquivar Recado
    // recebe - token (com id usuario), id recado
    // retorna - recados usuario atualizado OU Erro
    app.put("", (req : Request, res : Response) => {

    });
};
export default registerRoutes;