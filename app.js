app.post("/cartela", (req, res) => {
  const cartela = Cartela.create(req.body, (err) => {
      if (err) return res.status(400).json({
          error: true,
          message: "Error: Cartela não foi criada com sucesso!"
      });
  
      return res.status(200).json({
          error: false,
          message: "Cartela criada com sucesso!"
      })
  });
});
