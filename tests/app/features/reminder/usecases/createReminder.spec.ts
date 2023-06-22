import createReminder from "../../../../../src/app/features/reminder/usecases/createReminder";
import { RemindersTypeOrmRepository } from "../../../../../src/app/features/reminder/repository/remindersTypeOrmRepository"
import User from "../../../../../src/app/models/User";
import { UsersEntity } from "../../../../../src/app/shared/entities/usersEntity";

describe('Testes do useCase createReminder.', () => {
    beforeAll(() => {
        jest.spyOn(RemindersTypeOrmRepository.prototype, "saveReminder").mockResolvedValue();
    });
    afterAll(() => jest.clearAllMocks());

    const testUser = new UsersEntity;
    testUser.id = "54990751-9d04-4a94-bc6b-bf50c9a37779";

    const requestInfos = {
        action: "lavar Louça",
        date: "15/09/2023",
        time: "20:15",
        description: "lavar toda a louça e depois secar.",
        loggedUser: new User(testUser)
    };

    test("Não deve retornar nada.", async () => {
        const result = await createReminder(requestInfos);
        expect(result).toEqual(undefined);
    });
});