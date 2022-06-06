import { IPlaceDatasource } from "../../domain/datasource/place-datasource";
import { PlaceEntity } from "../../domain/entities/place-entity";
import { IPlaceRepository } from "../../domain/repositories/place-repository";
import { Either, left, right } from "../../shared/either";
import { ServerError } from "../../core/errors/failure";

export class PlaceRepository implements IPlaceRepository {
  private readonly placeDatasource: IPlaceDatasource;

  constructor(placeDatasource: IPlaceDatasource) {
    this.placeDatasource = placeDatasource;
  }

  async findPlaceByUuid(
    uuid: string
  ): Promise<Either<ServerError, PlaceEntity>> {
    try {
      const result = await this.placeDatasource.findPlaceByUuid(uuid);

      if (!result) return left(new ServerError(""));

      return right(result);
    } catch (error) {
      console.error(error);

      return left(new ServerError("Failure to find place."));
    }
  }

  async createPlace(
    place: PlaceEntity
  ): Promise<Either<ServerError, PlaceEntity>> {
    try {
      const result = await this.placeDatasource.createPlace(place);

      return right(result);
    } catch (error) {
      console.error(error);

      return left(new ServerError("Failure to create place."));
    }
  }
}
