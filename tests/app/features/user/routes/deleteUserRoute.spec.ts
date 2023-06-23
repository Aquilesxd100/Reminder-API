import { pgHelper } from "../../../../../src/app/shared/helpers/pg-helper";
import { app, connection } from "../../../../../src";
const request = require('supertest');
const crypto = require('crypto');

describe("Testes da rota de deleteUser.", () => {
    beforeAll(async () => {
        await connection(true);
    });
    afterAll(async () => {
        await pgHelper.disconnect();
    });

    test("Deve retornar erro de acesso.", async () => {
        const result = await request(app).delete(`/deleteuser`)
        const message = result._body.message;

        expect(message).toBe("Você não tem acesso a essa pagina.");
        expect(result.status).toBe(401);
    });

    test("Deve retornar erro de acesso.", async () => {
        const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNDEzMDk0OC05YTAyLTRmNmMtYWE0MS04ODVlZmJlYjY4YmUiLCJpYXQiOjE2ODc1NTYzMjcsImV4cCI6MTY4ODg1MjMyN30.sv6EC-VHNMUKjwZ9fdEqYu7L06_GDINs6YF__rLWOCM";

        const result = await request(app)
                            .delete(`/deleteuser`)
                            .set("authorization", `bearer ${invalidToken}`);
        
        const message = result._body.message;

        expect(message).toBe("Você não tem acesso a essa pagina.");
        expect(result.status).toBe(401);
    });

    test("Deve retornar uma confirmação da exclusão da conta.", async () => {
        const generatedUserName = (crypto.randomUUID()).split("-")[0];

        await request(app).post(`/newuser/${generatedUserName}/123a@`);
        const loginResponse = await request(app).get(`/login/${generatedUserName}/123a@`);
        const token = loginResponse._body.token;

        const result = await request(app)
        .delete(`/deleteuser`)
        .set("authorization", `bearer ${token}`);
        const message = result._body.message;

        expect(message).toBe("Usuário excluído com sucesso!");
        expect(result.status).toBe(200);
    });

});