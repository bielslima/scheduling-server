import { CryptoHandler } from "../../core/config/crypto";
import {
  UserNotFound,
  ServerError,
  FailToCreateUser,
} from "../../core/errors/failure";
import { IUserDatasource } from "../../domain/datasource/user-datasource";
import { UserEntity } from "../../domain/entities/user-entity";
import { UserCredentials } from "../../domain/entities/user-login";
import { IUserRepository } from "../../domain/repositories/user-repository";
import { Either, left, right } from "../../shared/either";
import { UserDatasource } from "../datasource/user-ds";

export class UserRepository implements IUserRepository {
  private readonly userDatasource: IUserDatasource;

  constructor(userDatasource: IUserDatasource) {
    this.userDatasource = userDatasource;
  }

  async findUserByCredentials(
    userData: UserCredentials
  ): Promise<Either<ServerError, UserEntity>> {
    try {
      userData.password = await CryptoHandler.hash(userData.password);

      const result = await this.userDatasource.findUserByCredentials(userData);

      if (!result) return left(new UserNotFound());

      return right(result!);
    } catch (error) {
      return left(new ServerError("Server failure."));
    }
  }

  async createUser(user: UserEntity): Promise<Either<ServerError, UserEntity>> {
    try {
      user.password = await CryptoHandler.hash(user.password);
      const result = await this.userDatasource.createUser(user);

      return right(result!);
    } catch (error) {
      return left(new ServerError("Server failure."));
    }
  }
}
