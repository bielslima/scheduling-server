import { ServerError } from "../../../core/errors/failure";
import { Either } from "../../../shared/either";
import { UserEntity } from "../../entities/user-entity";
import { IUserRepository } from "../../repositories/user-repository";

export class CreateUserUseCase {
    private readonly repository: IUserRepository;

    constructor(repository: IUserRepository){
        this.repository = repository;
    }

    async run(userData: UserEntity): Promise<Either<ServerError, UserEntity>>{
        return this.repository.createUser(userData);
    }
}