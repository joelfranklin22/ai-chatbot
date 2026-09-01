import sql from "mysql2/promise";
const db = await sql.createConnection({
  host: "localhost",
  user: "root",
  password: "2004",
  database: "ai_bot",
});

console.log("Db Connected Successfully");
export default db;
