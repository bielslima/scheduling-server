import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'places'})
class PlaceEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @Column({
    nullable: false,
  })
  name!: string;
}

export { PlaceEntity }
