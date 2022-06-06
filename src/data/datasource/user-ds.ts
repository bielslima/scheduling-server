import { IPlaceDatasource } from "../../domain/datasource/place-datasource";
import { PlaceEntity } from "../../domain/entities/place-entity";
import { DataSource } from "typeorm";
import { IUserDatasource } from "../../domain/datasource/user-datasource";
import { UserEntity } from "../../domain/entities/user-entity";
import { UserCredentials } from "../../domain/entities/user-login";
import { CryptoHandler } from "../../core/config/crypto";

export class UserDatasource implements IUserDatasource {
  private readonly datasource: DataSource;

  constructor(ds: DataSource) {
    this.datasource = ds;
  }

  async findUserByCredentials(userData: UserCredentials): Promise<UserEntity | null> {
    const repo = this.datasource.getRepository(UserEntity);

    const passwordCrypted = await CryptoHandler.hash(userData.password);

    return repo.findOneBy({
      email: userData.email,
      password: passwordCrypted,
    });
  }

  async createUser(userData: UserEntity): Promise<UserEntity> {
    const repo = this.datasource.getRepository(UserEntity);

    return repo.save(userData);
  }
}
