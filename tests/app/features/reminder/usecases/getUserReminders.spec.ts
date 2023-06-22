import getUserReminders from "../../../../../src/app/features/reminder/usecases/getUserReminders";
import { RemindersTypeOrmRepository } from "../../../../../src/app/features/reminder/repository/remindersTypeOrmRepository"
import { GetRemindersParamType } from "../../../../../src/app/features/reminder/types/types";
import Reminder from "../../../../../src/app/models/Reminder";
import { RemindersEntity } from "../../../../../src/app/shared/entities/remindersEntity";

describe('Testes do useCase getUserReminders.', () => {
    beforeAll(() => {
        jest.spyOn(RemindersTypeOrmRepository.prototype, "getRemindersByUserId").mockResolvedValue(userTestReminders);
    });
    afterAll(() => jest.clearAllMocks());

    const userTestReminders : Array<Reminder> = [];

    const reminder1 : RemindersEntity = new RemindersEntity;
    reminder1.user_id = "22290751-2a4f-4a94-bc6b-bf50c9a37779";
    reminder1.action = "Almoçar";
    reminder1.description = "Comer toda a comida do prato.";
    reminder1.archived = false;

    const reminder2 : RemindersEntity = structuredClone(reminder1);
    reminder2.action = "Correr";
    reminder2.description = "Correr 1km por toda a vizinhança.";

    const reminder3 : RemindersEntity = structuredClone(reminder1);
    reminder3.action = "Estudar";
    reminder3.description = "Estudar tudo sobre como controlar uma patrola.";
    reminder3.archived = true;

    userTestReminders.push(new Reminder(reminder1), new Reminder(reminder2), new Reminder(reminder3));

    const getRemindersParams : GetRemindersParamType = {
        search: undefined,
        archived: undefined,
        userId: "22290751-2a4f-4a94-bc6b-bf50c9a37779"
    };

    test("Deve retornar uma lista de Recados.", async () => {
        const result = await getUserReminders(getRemindersParams);
        expect(result.every((reminder) => reminder instanceof Reminder)).toBeTruthy();
    });

    test("Deve retornar uma lista com somente recados desarquivados", async () => {
        const result = await getUserReminders(getRemindersParams);
        expect(result.every((reminder) => !reminder.getArchivedStatus())).toBeTruthy();
    });

    test.skip("Deve retornar uma lista de recados que inclui os arquivados.", async () => {
        getRemindersParams.archived = true;
        const result = await getUserReminders(getRemindersParams);
        expect(result.length).toBe(3);
    });

    test(`Deve retornar somente os recados que incluem "toda" em seu titulo ou descrição.`, async () => {
        getRemindersParams.search = "toda";
        const result = await getUserReminders(getRemindersParams);
        expect(result.every((reminder) => {
            if (reminder.getAction().indexOf("toda") !== -1 
            || reminder.getDescription().indexOf("toda") !== -1) {
                return true;
            };
            return false;
        })).toBeTruthy();
    });
});