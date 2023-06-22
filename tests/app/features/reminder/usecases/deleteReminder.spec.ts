import deleteReminder from "../../../../../src/app/features/reminder/usecases/deleteReminder";
import { RemindersTypeOrmRepository } from "../../../../../src/app/features/reminder/repository/remindersTypeOrmRepository"
import { RemindersEntity } from "src/app/shared/entities/remindersEntity";

describe.skip('Testes do useCase deleteReminder.', () => {
    beforeAll(() => {
        jest.spyOn(RemindersTypeOrmRepository.prototype, "deleteReminder").mockResolvedValue();
    });
    afterAll(() => jest.clearAllMocks());

    const testReminder = new RemindersEntity;
    testReminder.id = "54990751-9d04-4a94-bc6b-bf50c9a37779";
    testReminder.user_id = "22290751-2a4f-4a94-bc6b-bf50c9a37779";
    testReminder.archived = true;
    testReminder.action = "Lavar Louça";
    testReminder.description = "Lavar toda a louça e depois secar."
    testReminder.time = "20:15";
    testReminder.date = "15/09/2023";

    test("Não deve retornar nada.", async () => {
        const result = await deleteReminder(testReminder);
        expect(result).toEqual(undefined);
    });
});