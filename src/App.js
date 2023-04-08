import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Catalog } from "./components/Catalog/Catalog";
import { Details } from "./components/Details/Details"
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { About } from "./components/AboutUs/about";
import { Create } from "./components/Create/Create";
import { Logout } from "./components/Logout/Logout";

import { AuthProvider } from "./contexts/AuthContext";
import { EditPost } from "./components/EditPost/EditPost";
import { PostProvider } from "./contexts/postContext";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <div id="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/details" element={<Details />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<Create />} />
            <Route path="/catalog/:postId" element={<Details />} />
            <Route path="/catalog/:postId/edit" element={<EditPost />} />
          </Routes>
          <Footer />
        </div>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
