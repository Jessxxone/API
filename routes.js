const { Router } = require("express");
const router = Router();

const data = require("./data");

router.get("/recipe/:id", (req, res) => {
  const { id } = req.params;
  const recipe = data.filter((r) => r.id === parseInt(id))[0];
  if (recipe === undefined) {
    res.status(404).send({
      status: false,
      message: "not found",
    });
  }
  res.status(200).send({
    status: true,
    message: "success",
    data: recipe,
  });
});

router.get("/recipe", (req, res) => {
  res.status(200).send({
    status: true,
    message: "success",
    data,
  });
});

module.exports = router;