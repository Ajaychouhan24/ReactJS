import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovies = () => {
 const [movie, setmovie] = useState({});
  const navigate = useNavigate();

  const handelChange = (e) => {
    setmovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/movie/add", movie)
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
                    <label for="formId1">Description</label>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Add Movie
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
export default AddMovies

