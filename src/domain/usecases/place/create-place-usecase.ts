import { ServerError } from "../../../core/errors";
import { Either } from "../../../shared/either";
import { PlaceEntity } from "../../entities/place-entity";
import { IPlaceRepository } from "../../repositories/place-repository";

export class CreatePlaceUseCase {
    private readonly repository: IPlaceRepository;

    constructor(repository: IPlaceRepository){
        this.repository = repository;
    }

    async run(place: PlaceEntity): Promise<Either<ServerError, PlaceEntity>>{
        return this.repository.createPlace(place);
    }
}