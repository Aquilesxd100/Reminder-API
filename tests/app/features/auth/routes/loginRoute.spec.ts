import { pgHelper } from "../../../../../src/app/shared/helpers/pg-helper";
import { app, connection } from "../../../../../src";
const request = require('supertest');
const crypto = require('crypto');

describe("Testes da rota de login.", () => {
    beforeAll(async () => {
        await connection(true);
    });
    afterAll(async () => {
        await pgHelper.disconnect();
    });

    test("Deve retornar um erro informando que o login ou senha estão incorretos.", async () => {
        const generatedUserName = (crypto.randomUUID()).split("-")[0];
        const generatedPassword = (crypto.randomUUID()).split("-")[0];

        const result = await request(app).get(`/login/${generatedUserName}/${generatedPassword}`);
        const responseMessage = result._body.message;

        expect(responseMessage).toBe("Login e/ou senha incorreto(s).");
        expect(result.status).toBe(400);
    });

    test("Deve retornar uma mensagem informando sucesso no login junto a um token.", async () => {

        await request(app).post("/newuser/testuser/123a@");

        const result = await request(app).get(`/login/testuser/123a@`);
        const responseMessage = result._body.message;

        expect(responseMessage).toBe("Usuário logado com sucesso!");
        expect(result._body.token).not.toBe(undefined);
        expect(result.status).toBe(200);
    });


});