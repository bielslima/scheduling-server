import { DataSource } from "typeorm";
import { PlaceEntity } from "../../data/domain/entities/place-entity";

export const psqlDS = new DataSource({
  type: "postgres",
  // url: process.env.PG_DB_URL!,
  username: process.env.PG_DB_USER,
  password: process.env.PG_DB_PASSWORD,
  host: process.env.PG_DB_HOST,
  database: process.env.PG_DB_DATABASE,
  port: 5432,
  entities: [PlaceEntity],
  ssl: {
    // require: true,
    rejectUnauthorized: false,
  },
});

export class PostgreSQLHelper {
  client!: DataSource;

  constructor() {
    this.client = psqlDS;
  }

  async connect(): Promise<void> {
    await this.client.initialize();
  }
}
