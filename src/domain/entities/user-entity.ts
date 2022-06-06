import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PlaceEntity } from "./place-entity";

@Entity("users")
class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid?: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  nickname!: string;

  @Column({
    nullable: true,
  })
  pictureUrl?: string;

  @Column({
    select: false,
  })
  password!: string;

  @OneToOne(() => PlaceEntity)
  @JoinColumn()
  place!: PlaceEntity;
}

export { UserEntity };
