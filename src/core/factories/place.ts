import { PlaceDatasource } from "../../data/datasource/place-ds";
import { PlaceRepository } from "../../data/repositories/place-repository";
import { CreatePlaceUseCase } from "../../domain/usecases/place/create-place-usecase";
import { CreatePlaceController } from "../../presentation/controllers/place/create-place-controller";
import { psqlDS } from "../config/database";

export const makeCreatePlaceController = (): CreatePlaceController => {
  const placeDatasource = new PlaceDatasource(psqlDS);
  const placeRepository = new PlaceRepository(placeDatasource);
  const createPlaceUseCase = new CreatePlaceUseCase(placeRepository);

  return new CreatePlaceController(createPlaceUseCase);
};
