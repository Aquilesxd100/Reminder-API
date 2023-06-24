import { pgHelper } from "../../../../../src/app/shared/helpers/pg-helper";
import { app, connection } from "../../../../../src";
const request = require('supertest');

describe("Testes da rota de updateReminder.", () => {
    let token = "";
    let testReminderId = "";

    beforeAll(async () => {
        await connection(true);

        await request(app).post("/newuser/testuser/123a@");
        const loginResponse = await request(app).get("/login/testuser/123a@");
        token = loginResponse._body.token;

        await request(app)
        .post(`/newreminder`)
        .send({
            action: "Passear com dog",
            date: "16/11/2023",
            time: "15:30",
            description: "Sair para passear com o dog."
        })
        .set("authorization", `bearer ${token}`);

        const response = await request(app)
                            .get(`/reminders`)
                            .set("authorization", `bearer ${token}`);

        testReminderId = response._body[0].id; 
    });
    afterAll(async () => {
        await pgHelper.disconnect();
    });

    test("Deve retornar erro de acesso.", async () => {
        const result = await request(app).put(`/updatereminder/123`)
        const message = result._body.message;

        expect(message).toBe("Você não tem acesso a essa pagina.");
        expect(result.status).toBe(401);
    });

    test("Deve retornar erro de acesso.", async () => {
        const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNDEzMDk0OC05YTAyLTRmNmMtYWE0MS04ODVlZmJlYjY4YmUiLCJpYXQiOjE2ODc1NTYzMjcsImV4cCI6MTY4ODg1MjMyN30.sv6EC-VHNMUKjwZ9fdEqYu7L06_GDINs6YF__rLWOCM";

        const result = await request(app)
                            .put(`/updatereminder/123`)
                            .set("authorization", `bearer ${invalidToken}`);
        
        const message = result._body.message;

        expect(message).toBe("Você não tem acesso a essa pagina.");
        expect(result.status).toBe(401);
    });

    test("Deve retornar um erro referente ao id inválido do recado", 
    async () => {

        const result = await request(app)
        .put(`/updatereminder/123`)
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("ID do recado inválido.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro referente ao recado não ter sido encontrado.", 
    async () => {

        const result = await request(app)
        .put(`/updatereminder/9bb01982-1b42-456e-ba0c-ff314c835d51`)
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Nenhum recado com esse ID foi encontrado.");
        expect(result.status).toBe(404);
    });

    test("Deve retornar um erro referente a falta de informações para atualizar no recado.", 
    async () => {
        const result = await request(app)
        .put(`/updatereminder/${testReminderId}`)
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Informe ao menos um atributo do recado para atualizar.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro referente ao tipo inválido de informacao a atualizar do recado.", 
    async () => {
        
        const result = await request(app)
        .put(`/updatereminder/${testReminderId}`)
        .send({
            action: 10
        })
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Tipo de um ou mais atributos inválido.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro referente ao número de caracteres da action do recado.", 
    async () => {
        const result = await request(app)
        .put(`/updatereminder/${testReminderId}`)
        .send({
            action: "Nome muito, muito, muitooo grande!",
        })
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("O campo de Ação deve ter ao menos 1 caractere e no máximo 21.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro referente ao formato incorreto de data.", 
    async () => {
        
        const result = await request(app)
        .put(`/updatereminder/${testReminderId}`)
        .send({
            date: "dataIncorreta",
        })
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Formato de data incorreto.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro referente ao formato incorreto de horário.", 
    async () => {
        const result = await request(app)
        .put(`/updatereminder/${testReminderId}`)
        .send({
            time: "2005",
        })
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Formato de horário inválido.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro referente a quantidade incorreta de caracteres na descrição do recado.", 
    async () => {
        const result = await request(app)
        .put(`/updatereminder/${testReminderId}`)
        .send({
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet, enim ac commodo vulputate, tortor mi fringilla ante, id dapibus, lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet, enim ac commodo vulputate, tortor mi fringilla ante, id dapibus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet, enim ac commodo vulputate, tortor mi fringilla ante, id dapibus."
        })
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("A Descrição precisa ter ao menos 1 caractere e no maximo 66.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar uma confirmação da atualização do recado.", 
    async () => {
        const result = await request(app)
        .put(`/updatereminder/${testReminderId}`)
        .send({
            action: "Viajar",
            date: "11/09/2025",
            time: "08:15",
            description: "Viajar para o japão!"
        })
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Recado atualizado com sucesso.");
        expect(result.status).toBe(200);
    });
});