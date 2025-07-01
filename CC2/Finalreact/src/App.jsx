import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componenets/NavBar";
import Home from "./componenets/Home";
import AddMovies from "./componenets/AddMovies";
import ShowMovie from "./componenets/ShowMovie";
import UpdateMovie from "./componenets/UpdateMovie";
import Footer from "./componenets/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddMovies />} />
          <Route path="/:id" element={<ShowMovie />} />
          <Route path="/update/:id" element={<UpdateMovie />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
