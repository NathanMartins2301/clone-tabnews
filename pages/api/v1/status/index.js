import database from "infra/database.js";

async function status(req, res) {
  const result = await database.query("SELECT 1+1;");
  console.log(result);
  res.status(200).json({ chave: "Teste 123" });
}

export default status;
