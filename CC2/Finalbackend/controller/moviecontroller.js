const movieModel = require("../model/moviemodel");

exports.addMovie = async (req, res) => {
  const new_movie = new movieModel(req.body);
  const result = await new_movie.save();
  res.status(200).json(result);
};


exports.showMovies = async (req,res) => {
    const movies = await movieModel.find();
  if (movies != null) {
    res.status(200).json(movies);
  } else {
    res.status(404).json({ message: "No Movies" });
  }
    
};


exports.ShowMovie = async (req,res) => {
     const movie = await movieModel.findById(req.params.id);
  if (movie != null) {
    res.status(200).json(movie);
  } else {
    res.status(204).json({ message: "No Movie found" });
  }
}


exports.updateMovie = async (req,res) => {
     const result = await movieModel.findByIdAndUpdate(req.params.id, req.body);
     res.status(200).json(result);

};

exports.deleteMovie = async (req,res) => {
    const result = await movieModel.findByIdAndDelete(req.params.id);
    res.json(result);

};




























