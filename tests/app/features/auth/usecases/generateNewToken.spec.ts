import jwt from "jsonwebtoken";
import generateNewTokenMiddleware from "../../../../../src/app/features/auth/usecases/generateNewToken";
import { authEnv } from "../../../../../src/app/envs/env";

describe("Testes do useCase de gerar Token.", () => {
    test("Deve retornar um token contendo as informações enviadas.", () => {
        const userId : string = "54990751-9d04-4a94-bc6b-bf50c9a37779";
        const token : string = generateNewTokenMiddleware(userId);

        const verifiedToken : any = jwt.verify(token, authEnv);
        expect(verifiedToken.userId).toBe(userId);
    });
});