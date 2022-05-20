import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("places")
class PlaceEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid?: string;

  @Column({
    nullable: false,
  })
  name!: string;
}

export { PlaceEntity }
