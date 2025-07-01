import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/movie")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center `g-2`">
          {movies.map((movie) => (
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Title - {movie.title}</h4>
                  <p className="card-text">Despriction - {movie.description} </p>
                  <NavLink
                    name=""
                    id=""
                    className="btn btn-primary"
                    to={`/${movie._id}`}
                    role="button"
                  >
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
