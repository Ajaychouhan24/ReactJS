const express = require("express");
const {
  addMovie,
  showMovies,
  updateMovie,
  ShowMovie,
  deleteMovie,
} = require("../controller/moviecontroller");

const routes = express.Router();

routes.get("/",showMovies);
routes.post("/add", addMovie);
routes.put("/:id", updateMovie);
routes.get("/movie/:id", ShowMovie);
routes.delete("/del/:id", deleteMovie);

module.exports = routes;
