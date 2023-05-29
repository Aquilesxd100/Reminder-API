import { Repository } from "typeorm";
import { UsersEntity } from "../../../shared/entities/usersEntity";
import { pgHelper } from "../../../shared/helpers/pg-helper";

class UserTypeOrmRepository {
    private userRepository : Repository<UsersEntity>;

    constructor() {
        this.userRepository = pgHelper.client.manager.getRepository(UsersEntity);
    };

    async getUserByID(idParam : string) : Promise<UsersEntity | null> {
        return await this.userRepository.findOne({ where: { id: idParam } });
    };

    async getUserByUserName(username : string) : Promise<UsersEntity | null> {
        return await this.userRepository.findOne({ where: { username: username } });
    };

    async createUser(newUser : UsersEntity) : Promise<void> {
        await newUser.save();
    };

    async deleteUser(currentUser : UsersEntity) : Promise<void> {
        await this.userRepository.remove(currentUser);
    };
};

export const userRepository = new UserTypeOrmRepository;