import deleteUser from "../../../../../src/app/features/user/usecases/deleteUser";
import { UserTypeOrmRepository } from "../../../../../src/app/features/user/repository/userTypeOrmRepository"
import { UsersEntity } from "../../../../../src/app/shared/entities/usersEntity";
import { RemindersTypeOrmRepository } from "src/app/features/reminder/repository/remindersTypeOrmRepository";

describe('Testes do useCase deleteUser.', () => {
    beforeAll(() => {
        jest.spyOn(UserTypeOrmRepository.prototype, "deleteUser").mockResolvedValue();
        jest.spyOn(RemindersTypeOrmRepository.prototype, "getRemindersEntityByUserId").mockResolvedValue([]);
    });
    afterAll(() => jest.clearAllMocks());

    const testNewUser : UsersEntity = new UsersEntity;
    testNewUser.id = "7c7779fb-f932-4d12-ab5f-0ccca6364cfc";

    test("Não deve retornar nada.", async () => {
        const result = await deleteUser(testNewUser);
        expect(result).toEqual(undefined);
    });
});