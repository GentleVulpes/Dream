import { Pool } from "pg";
import "dotenv/config";

if (!process.env.DB_USER || !process.env.DB_PASS) {
  console.error("Error: environment variables of database are not configured!");
  process.exit(1);
}

export const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
});

pool.on("connect", () => {
  console.log("connected");
});

pool.on("error", (error) => {
  console.error("Unexpected error in database client!", error);
  process.exit(1);
});
