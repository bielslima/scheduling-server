import { UserEntity } from "../entities/user-entity";
import { UserCredentials } from "../interfaces/user-login";

export interface IUserDatasource {
    findUserByCredentials(userData: UserCredentials): Promise<UserEntity | null>
    createUser(userData: UserEntity): Promise<UserEntity>
}