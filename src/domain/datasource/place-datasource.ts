import { PlaceEntity } from "../entities/place-entity";

export interface IPlaceDatasource {
    findPlaceByUuid(uuid: string): Promise<PlaceEntity | null>
    createPlace(place: PlaceEntity): Promise<PlaceEntity>
}