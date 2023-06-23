import updateReminder from "../../../../../src/app/features/reminder/usecases/updateReminder";
import { RemindersTypeOrmRepository } from "../../../../../src/app/features/reminder/repository/remindersTypeOrmRepository"
import { UsersEntity } from "../../../../../src/app/shared/entities/usersEntity";
import { RemindersEntity } from "../../../../../src/app/shared/entities/remindersEntity";
import { ReminderEditType } from "../../../../../src/app/features/reminder/types/types";

describe('Testes do useCase updateReminder.', () => {
    beforeAll(() => {
        jest.spyOn(RemindersTypeOrmRepository.prototype, "saveReminder").mockResolvedValue();
    });
    afterAll(() => jest.clearAllMocks());

    const testUser = new UsersEntity;
    testUser.id = "54990751-9d04-4a94-bc6b-bf50c9a37779";

    const testReminder = new RemindersEntity;
    testReminder.id = "54990751-9d04-4a94-bc6b-bf50c9a37779";
    testReminder.user_id = "22290751-2a4f-4a94-bc6b-bf50c9a37779";
    testReminder.archived = true;
    testReminder.action = "Lavar Louça";
    testReminder.description = "Lavar toda a louça e depois secar."
    testReminder.time = "20:15";
    testReminder.date = "15/09/2023";

    const testReminderEditInfos : ReminderEditType = {
        action : "Caminhar",
        date: undefined,
        time: "12/10/2023",
        description : undefined
    };

    test("Não deve retornar nada.", async () => {
        const result = await updateReminder(testReminder, testReminderEditInfos);
        expect(result).toEqual(undefined);
    });
});