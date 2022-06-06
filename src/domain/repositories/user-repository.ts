// import { ServerError } from "../../core/errors";
import { ServerError } from "../../presentation/errors/server-error";
import { Either } from "../../shared/either";
import { UserEntity } from "../entities/user-entity";
import { UserCredentials } from "../interfaces/user-login";

export interface IUserRepository {
    findUserByCredentials(userData: UserCredentials): Promise<Either<ServerError, UserEntity>>
    createUser(user: UserEntity): Promise<Either<ServerError, UserEntity>>
}
