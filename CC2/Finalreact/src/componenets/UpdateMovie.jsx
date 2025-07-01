import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateMovie = () => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const handelChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/movie/movie/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/movie/${id}`, movie)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div class="container">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="title"
                      id="formId1"
                      placeholder=""
                      value={movie.title}
                      onChange={handelChange}
                    />
                    <label for="formId1">Title</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      name="description"
                      id="formId1"
                      placeholder=""
                      value={movie.description}
                      onChange={handelChange}
                    />
                    <label for="formId1">description</label>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    update Movie
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateMovie;
