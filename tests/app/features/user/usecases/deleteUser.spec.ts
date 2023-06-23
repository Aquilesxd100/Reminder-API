import deleteUser from "../../../../../src/app/features/user/usecases/deleteUser";
import { UserTypeOrmRepository } from "../../../../../src/app/features/user/repository/userTypeOrmRepository"
import { UsersEntity } from "../../../../../src/app/shared/entities/usersEntity";

describe('Testes do useCase deleteUser.', () => {
    beforeAll(() => {
        jest.spyOn(UserTypeOrmRepository.prototype, "deleteUser").mockResolvedValue();
    });
    afterAll(() => jest.clearAllMocks());

    const testNewUser : UsersEntity = new UsersEntity;

    test("Não deve retornar nada.", async () => {
        const result = await deleteUser(testNewUser);
        expect(result).toEqual(undefined);
    });
});