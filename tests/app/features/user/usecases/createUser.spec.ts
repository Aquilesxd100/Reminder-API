import createUser from "../../../../../src/app/features/user/usecases/createUser";
import { UserTypeOrmRepository } from "../../../../../src/app/features/user/repository/userTypeOrmRepository"

describe('Testes do useCase createUser.', () => {
    beforeAll(() => {
        jest.spyOn(UserTypeOrmRepository.prototype, "createUser").mockResolvedValue();
    });
    afterAll(() => jest.clearAllMocks());

    test("Não deve retornar nada.", async () => {
        const result = await createUser("alexa123", "123aB@");
        expect(result).toEqual(undefined);
    });
});