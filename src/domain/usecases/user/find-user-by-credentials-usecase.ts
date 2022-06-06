import { ServerError } from "../../../core/errors/failure";
import { Either } from "../../../shared/either";
import { UserEntity } from "../../entities/user-entity";
import { UserCredentials } from "../../entities/user-login";
import { IUserRepository } from "../../repositories/user-repository";

export class FindUserByCredentialsUseCase {
    private readonly repository: IUserRepository;

    constructor(repository: IUserRepository){
        this.repository = repository;
    }

    async run(userData: UserCredentials): Promise<Either<ServerError, UserEntity>>{
        return this.repository.findUserByCredentials(userData);
    }
}