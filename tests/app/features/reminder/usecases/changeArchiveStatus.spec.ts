import changeArchiveStatus from "../../../../../src/app/features/reminder/usecases/changeArchiveStatus";
import { RemindersTypeOrmRepository } from "../../../../../src/app/features/reminder/repository/remindersTypeOrmRepository"
import { RemindersEntity } from "../../../../../src/app/shared/entities/remindersEntity";

describe('Deve retornar uma string confirmando o arquivamento do recado.', () => {
    beforeAll(() => {
        jest.spyOn(RemindersTypeOrmRepository.prototype, "saveReminder").mockResolvedValue()

    });
    afterAll(() => jest.clearAllMocks());
    test("Deve retornar string", async () => {
        const result = await changeArchiveStatus(new RemindersEntity);
        expect(result).toEqual("Recado arquivado com sucesso!");
    });
});