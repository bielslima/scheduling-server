import { IPlaceDatasource } from "../domain/datasource/place-datasource";
import { PlaceEntity } from "../domain/entities/place-entity";
import { DataSource } from "typeorm";

export class PlaceDatasource implements IPlaceDatasource {
  private readonly datasource: DataSource;

  constructor(ds: DataSource) {
    this.datasource = ds;
  }

  async findPlaceByUuid(uuid: string): Promise<PlaceEntity | null> {
    const repo = this.datasource.getRepository(PlaceEntity);

    return repo.findOneBy({
      uuid,
    });
  }

  async createPlace(place: PlaceEntity): Promise<PlaceEntity> {
    const repo = this.datasource.getRepository(PlaceEntity);

    return repo.save(place);
  }
}
