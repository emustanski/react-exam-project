import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import * as postService from "./services/postService"
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Catalog } from "./components/Catalog/Catalog";
import { Details } from "./components/Details/Details";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { About } from "./components/AboutUs/about";
import { Create } from "./components/Create/Create";

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAll()
    .then(result => {
      setPosts(result)
    })
  }, []);

  return (
    <div id="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home posts={posts}/>} />
        <Route path="/catalog" element={<Catalog posts={posts}/>} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;