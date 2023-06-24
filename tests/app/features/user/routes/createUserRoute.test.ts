import { pgHelper } from "../../../../../src/app/shared/helpers/pg-helper";
import { app, connection } from "../../../../../src";
const request = require('supertest');
const crypto = require('crypto');

describe("Testes da rota de criação de usuario.", () => {
    beforeAll(async () => {
        await connection(true);
    });
    afterAll(async () => {
        await pgHelper.disconnect();
    });

    test("Deve retornar um erro informando que o login precisa ter ao menos 4 dígitos.", async () => {
        const result = await request(app).post(`/newuser/a/123a@`);
        const responseMessage = result._body.message;

        expect(responseMessage).toBe("O login precisa ter ao menos 4 dígitos.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro informando que o login precisa ter no maximo 10 dígitos.", async () => {
        const result = await request(app).post(`/newuser/alexdasilvapereira/123a@`);
        const responseMessage = result._body.message;

        expect(responseMessage).toBe("O login pode ter no máximo 10 dígitos.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro informando que a senha precisa ter ao menos uma letra.", async () => {
        const result = await request(app).post(`/newuser/aquiles/1@`);
        const responseMessage = result._body.message;

        expect(responseMessage).toBe("A senha precisa ter ao menos uma letra.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro informando que a senha precisa ter ao menos um número.", async () => {
        const result = await request(app).post(`/newuser/aquiles/abcde`);
        const responseMessage = result._body.message;

        expect(responseMessage).toBe("A senha precisa ter ao menos um número.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro informando que a senha precisa ter ao menos 4 dígitos.", async () => {
        const result = await request(app).post(`/newuser/aquiles/a2b`);
        const responseMessage = result._body.message;

        expect(responseMessage).toBe("A senha precisa ter ao menos 4 dígitos.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro informando que a senha pode ter no maximo 10 dígitos.", async () => {
        const result = await request(app).post(`/newuser/aquiles/a2b24gb5hbar`);
        const responseMessage = result._body.message;

        expect(responseMessage).toBe("A senha pode ter no máximo 10 dígitos.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar um erro informando que o login já existe.", async () => {
        await request(app).post(`/newuser/fernando/123a@`);
        const result = await request(app).post(`/newuser/fernando/123a@`);
        const responseMessage = result._body.message;

        expect(responseMessage).toBe("Esse login já existe.");
        expect(result.status).toBe(400);
    });

    test("Deve retornar sucesso ao criar uma nova conta.", async () => {
        const generatedUserName = (crypto.randomUUID()).split("-")[0];

        const result = await request(app).post(`/newuser/${generatedUserName}/123a@`);
        const responseMessage = result._body.message;

        expect(responseMessage).toBe("Conta criada com sucesso!");
        expect(result.status).toBe(201);
    });

});