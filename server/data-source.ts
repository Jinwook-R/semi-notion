import { DataSource } from "typeorm";
import { Post } from "./src/entity/post";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [Post],
    subscribers: [],
    migrations: [],
})

export default AppDataSource;