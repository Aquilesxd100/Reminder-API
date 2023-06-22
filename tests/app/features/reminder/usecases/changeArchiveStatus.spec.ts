import changeArchiveStatus from "../../../../../src/app/features/reminder/usecases/changeArchiveStatus";
import { RemindersTypeOrmRepository } from "../../../../../src/app/features/reminder/repository/remindersTypeOrmRepository"
import { RemindersEntity } from "../../../../../src/app/shared/entities/remindersEntity";

describe('Testes do useCase changeArchiveStatus.', () => {
    beforeAll(() => {
        jest.spyOn(RemindersTypeOrmRepository.prototype, "saveReminder").mockResolvedValue()

    });
    afterAll(() => jest.clearAllMocks());

    const testReminder : RemindersEntity = new RemindersEntity;

    test("Deve retornar uma string confirmando o arquivamento do recado.", async () => {
        testReminder.archived = false;

        const result = await changeArchiveStatus(testReminder);
        expect(result).toEqual("Recado arquivado com sucesso!");
    });

    test("Deve retornar uma string confirmando o desarquivamento do recado.", async () => {
        testReminder.archived = true;

        const result = await changeArchiveStatus(testReminder);
        expect(result).toEqual("Recado desarquivado com sucesso!");
    });
});