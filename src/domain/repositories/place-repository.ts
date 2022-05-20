import { ServerError } from "../../core/errors";
import { Either } from "../../shared/either";
import { PlaceEntity } from "../entities/place-entity";

export interface IPlaceRepository {
    findPlaceByUuid(uuid: string): Promise<Either<ServerError, PlaceEntity>>
    createPlace(place: PlaceEntity): Promise<Either<ServerError, PlaceEntity>>
}