import { Repository } from "typeorm";
import { UsersEntity } from "src/app/shared/entities/usersEntity";
import { pgHelper } from "src/app/shared/helpers/pg-helper";

export class UserTypeOrmRepository {
    private userRepository : Repository<UsersEntity>;

    constructor() {
        this.userRepository = pgHelper.client.manager.getRepository(UsersEntity);
    };

    async findUserByID(idParam : string) : Promise<UsersEntity | null> {
        return await this.userRepository.findOne({ where: { id: idParam } });
    };

    async createUser(newUser : UsersEntity) : Promise<void> {
        await newUser.save();
    };

    async deleteUser(currentUser : UsersEntity) : Promise<void> {
        await this.userRepository.remove(currentUser);
    };
}