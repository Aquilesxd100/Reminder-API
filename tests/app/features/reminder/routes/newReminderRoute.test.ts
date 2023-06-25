import { pgHelper } from "../../../../../src/app/shared/helpers/pg-helper";
import { app, connection } from "../../../../../src";
const request = require('supertest');

describe("Testes da rota de newReminder.", () => {
    let token = "";

    beforeAll(async () => {
        await connection(true);

        await request(app).post("/newuser/testuser/123a@");
        const loginResponse = await request(app).get("/login/testuser/123a@");
        token = loginResponse._body.token;
    });
    afterAll(async () => {
        await pgHelper.disconnect();
    });

    test("Deve retornar erro de acesso.", async () => {
        const result = await request(app).post(`/newreminder`)
        const message = result._body.message;

        expect(message).toBe("Você não tem acesso a essa pagina.");
        expect(result.status).toBe(401);
    });

    test("Deve retornar erro de acesso.", async () => {
        const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNDEzMDk0OC05YTAyLTRmNmMtYWE0MS04ODVlZmJlYjY4YmUiLCJpYXQiOjE2ODc1NTYzMjcsImV4cCI6MTY4ODg1MjMyN30.sv6EC-VHNMUKjwZ9fdEqYu7L06_GDINs6YF__rLWOCM";

        const result = await request(app)
                            .post(`/newreminder`)
                            .set("authorization", `bearer ${invalidToken}`);
        
        const message = result._body.message;

        expect(message).toBe("Você não tem acesso a essa pagina.");
        expect(result.status).toBe(401);
    });

    test("Deve retornar um erro referente a falta de informações do novo recado.", 
    async () => {

        const result = await request(app)
        .post(`/newreminder`)
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Tipo de um ou mais dados incorreto.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro referente ao número de caracteres da action do recado.", 
    async () => {
        const result = await request(app)
        .post(`/newreminder`)
        .send({
            action: "Nome muito, muito, muitooo grande!",
            date: "24/09/2023",
            time: "20:15",
            description: "Uma descrição do recado."
        })
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("O campo de Ação deve ter ao menos 1 caractere e no máximo 21.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro referente ao formato incorreto de data.", 
    async () => {
        
        const result = await request(app)
        .post(`/newreminder`)
        .send({
            action: "Sair para Jantar",
            date: "dataIncorreta",
            time: "20:15",
            description: "Uma descrição do recado."
        })
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Formato de data incorreto.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro referente ao formato incorreto de horário.", 
    async () => {
        const result = await request(app)
        .post(`/newreminder`)
        .send({
            action: "Sair para Jantar",
            date: "24/09/2023",
            time: "2005",
            description: "Uma descrição do recado."
        })
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Formato de horário inválido.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro referente ao tipo de horário incorreto.", 
    async () => {
        const result = await request(app)
        .post(`/newreminder`)
        .send({
            action: "Sair para Jantar",
            date: "24/09/2023",
            time: "cc:aa",
            description: "Uma descrição do recado."
        })
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Tipo de um ou mais dados invalido(s).");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro referente ao valor de hora incorreto.", 
    async () => {
        const result = await request(app)
        .post(`/newreminder`)
        .send({
            action: "Sair para Jantar",
            date: "24/09/2023",
            time: "24:00",
            description: "Uma descrição do recado."
        })
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Valor de hora incorreto.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro referente ao valor de minuto incorreto.", 
    async () => {
        const result = await request(app)
        .post(`/newreminder`)
        .send({
            action: "Sair para Jantar",
            date: "24/09/2023",
            time: "23:61",
            description: "Uma descrição do recado."
        })
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Valor de minuto incorreto.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro referente ao formato de horário inválido.", 
    async () => {
        const result = await request(app)
        .post(`/newreminder`)
        .send({
            action: "Sair para Jantar",
            date: "24/09/2023",
            time: "23557",
            description: "Uma descrição do recado."
        })
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Formato de horário inválido.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro referente a quantidade incorreta de caracteres na descrição do recado.", 
    async () => {
        const result = await request(app)
        .post(`/newreminder`)
        .send({
            action: "Sair para Jantar",
            date: "24/09/2023",
            time: "20:15",
            description: ""
        })
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("A Descrição precisa ter ao menos 1 caractere e no maximo 66.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar uma confirmação da criação do recado.", 
    async () => {
        const result = await request(app)
        .post(`/newreminder`)
        .send({
            action: "Sair para Jantar",
            date: "24/09/2023",
            time: "20:15",
            description: "Sair para jantar em um restaurante chique com a gata."
        })
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Recado criado com sucesso!");
        expect(result.status).toBe(201);
    });
});