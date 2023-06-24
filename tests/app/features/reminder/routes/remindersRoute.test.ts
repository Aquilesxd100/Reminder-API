import { pgHelper } from "../../../../../src/app/shared/helpers/pg-helper";
import { app, connection } from "../../../../../src";
const request = require('supertest');

describe("Testes da rota de pegar reminders.", () => {
    let token = "";

    beforeAll(async () => {
        await connection(true);

        const loginAttempt = await request(app).get("/login/testuser/123a@");
        if (loginAttempt._body.token) {
            await request(app)
                .delete("/deleteuser")
                .set("authorization", `bearer ${loginAttempt._body.token}`);
        };

        await request(app).post("/newuser/testuser/123a@");
        const loginResponse = await request(app).get("/login/testuser/123a@");
        token = loginResponse._body.token;

        const recado1 = await request(app)
        .post(`/newreminder`)
        .send({
            action: "Lavar roupa",
            date: "06/01/2024",
            time: "14:12",
            description: "Lavar toda a roupa como os maias e astecas faziam."
        })
        .set("authorization", `bearer ${token}`);

        const recado2 = await request(app)
        .post(`/newreminder`)
        .send({
            action: "Fazer compras",
            date: "02/04/2024",
            time: "10:15",
            description: "Fazer as compras da semana em qualquer mercado menos Carrefour."
        })
        .set("authorization", `bearer ${token}`);

        const recado3 = await request(app)
        .post(`/newreminder`)
        .send({
            action: "Estudar PHP",
            date: "07/02/2024",
            time: "09:15",
            description: "Fazer o curso do site curso em vídeo sobre PHP."
        })
        .set("authorization", `bearer ${token}`);

        const remindersRequest = await request(app)
                            .get(`/reminders`)
                            .set("authorization", `bearer ${token}`);
        const reminders = remindersRequest._body;

        await request(app)
        .put(`/archivereminder/${reminders[0].id}`)
        .set("authorization", `bearer ${token}`);
    });

    afterAll(async () => {
        await pgHelper.disconnect();
    });



    test("Deve retornar erro de acesso.", async () => {
        const result = await request(app).get(`/reminders`)
        const message = result._body.message;

        expect(message).toBe("Você não tem acesso a essa pagina.");
        expect(result.status).toBe(401);
    });

    test("Deve retornar erro de acesso.", async () => {
        const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNDEzMDk0OC05YTAyLTRmNmMtYWE0MS04ODVlZmJlYjY4YmUiLCJpYXQiOjE2ODc1NTYzMjcsImV4cCI6MTY4ODg1MjMyN30.sv6EC-VHNMUKjwZ9fdEqYu7L06_GDINs6YF__rLWOCM";

        const result = await request(app)
                            .get(`/reminders`)
                            .set("authorization", `bearer ${invalidToken}`);
        
        const message = result._body.message;

        expect(message).toBe("Você não tem acesso a essa pagina.");
        expect(result.status).toBe(401);
    });

    test("Deve retornar um erro sobre a query archived.", 
    async () => {
        const result = await request(app)
        .get(`/reminders?archived=false`)
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("A Query archived só pode ser true.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro sobre o tipo invalido da query search.", 
    async () => {
        const result = await request(app)
        .get(`/reminders?search[]=array`)
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Tipo de Query search inválida.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar uma lista de recados desarquivados.", 
    async () => {
        const result = await request(app)
        .get(`/reminders`)
        .set("authorization", `bearer ${token}`);
        const reminders = result._body;

        expect(reminders.every((reminder : any) => !reminder.archived)).toBeTruthy();
        expect(result.status).toBe(200);
    });

    test("Deve retornar uma lista com todos os recados.", 
    async () => {
        const result = await request(app)
        .get(`/reminders?archived=true`)
        .set("authorization", `bearer ${token}`);
        const reminders = result._body;

        expect(reminders.length).toBe(3);
        expect(result.status).toBe(200);
    });

    test(`Deve retornar uma lista somente dos recados que tiverem "Fazer" em seu título ou descrição.`, 
    async () => {
        const result = await request(app)
        .get(`/reminders?search=Fazer&archived=true`)
        .set("authorization", `bearer ${token}`);
        const reminders = result._body;

        expect(reminders.every((reminder : any) => {
            if (reminder.action.indexOf("Fazer") !== -1 
            || reminder.description.indexOf("Fazer") !== -1) {
                return true;
            };
            return false;
        })).toBeTruthy();
        expect(result.status).toBe(200);
    });

});