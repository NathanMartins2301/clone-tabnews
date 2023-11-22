function status(req, res) {
  res.status(200).json({ chave: "Teste 123" });
}

export default status;
