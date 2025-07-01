import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";

const ShowMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/movie/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  });

  console.log(movie);
  

  const handleClick = () => {
    axios
      .delete(`http://localhost:4000/movie/del/${id}`)
      .then((res) => navigate("/"))
      .then((err) => console.log(err));
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{movie.title}</h4>
                <p className="card-text">{movie.content}</p>
                <NavLink
                  name=""
                  id=""
                  className="btn btn-primary"
                  to={`/update/${movie._id}`} 
                  role="button"
                >
                  Update
                </NavLink>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClick}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMovie;
