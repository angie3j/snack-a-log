//
const express = require("express");
const snacks = express.Router();
const confirmHealth = require("../confirmHealth");

const {
  getAllSnacks,
  getSnack,
  deleteSnack,
  createSnack,
} = require("../queries/snacks");

// GET the entire snacks object - index
snacks.get("/", async (_, response) => {
  console.log("GET request to /snacks");
  const allSnacks = await getAllSnacks();
  console.log(allSnacks);
  // Checking for an empty object
  if (allSnacks.length === 0) {
    response.status(404).json({ error: "Server Error" });
    return;
  }
  response.status(200).json({
    success: true,
    payload: allSnacks,
  });
});

// GET a single snack by id -show
snacks.get("/:id", async (request, response) => {
  console.log("GET request to /snacks/:id");
  const { id } = request.params;
  // function taking a parameter id
  const snack = await getSnack(id);
  if (snack.received === 0) {
    return response.status(404).json({ success: false, payload: "not found" });
  }
  // checking if snack is undefined
  if (snack === "undefined") {
    response.status(404).json({ error: "Server Error" });
    return;
  }
  response.status(200).json({
    success: true,
    payload: snack,
  });
});

// DELETE -destroy
snacks.delete("/:id", async (request, response) => {
  console.log("DELETE request to /snacks/:id");
  const { id } = request.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.received === 0) {
    response
      .status(404)
      .json({ success: false, payload: "does not delete anything" });
    return;

  }
  response.status(200).json({
    success: true,
    payload: deletedSnack,
  });
});

// POST create a new snack - create

snacks.post("/", async (req, res) => {
  console.log("POST /snacks");
  const { body } = req;
  if (!body.image) {
    body.image =
      "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
  }

  body.name = body.name
    .split(" ")
    .map((el) => {
      if (el.length > 2) {
        return el[0].toUpperCase() + el.slice(1).toLowerCase();
      }
      return el;
    })
    .join(" ");

  body.is_healthy = confirmHealth(body);

  const snack = await createSnack(body);
  if (!snack.name) {
    return res.status(422).json({ error: "Some error" });
  }
  res.status(200).json({
    success: true,
    payload: snack,
  });
});


module.exports = snacks;
