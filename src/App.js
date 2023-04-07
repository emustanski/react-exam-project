import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Catalog } from "./components/Catalog/Catalog";
import { Details } from "./components/Details/Details";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { About } from "./components/AboutUs/about";
import { Create } from "./components/Create/Create";
import { Logout } from "./components/Logout/Logout";

import { postServiceFactory } from "./services/postService";
import { authServiceFactory } from "./services/authService";
import { AuthContext } from "./contexts/AuthContext";
import { EditPost } from "./components/EditPost/EditPost";


function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [auth, setAuth] = useState({});
  const postService = postServiceFactory(auth.accessToken)
  const authService = authServiceFactory(auth.accessToken)

  useEffect(() => {
    postService.getAll().then(result => {
      setPosts(result);
    });
  }, []);

  const onCreateSubmit = async (data) => {
    const newPost = await postService.create(data);

    setPosts((state) => [...state, newPost]);
    navigate("/catalog");
  };

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);

      setAuth(result);

      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };

  const onRegisterSubmit = async (values) => {
    const { rePassword, ...registerData } = values;

    if (rePassword !== registerData.password) {
      return;
    }

    try {
      const result = await authService.register(registerData);

      setAuth(result);

      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };

  const onLogout = async () => {
    await authService.logout();
    setAuth({});
  };

  const onEditSubmit = async (values) => {

    const editedPost = await postService.edit(values._id, values);

    setPosts(state => state.map(x => x._id === values._id ? editedPost : x))
    
    navigate(`/catalog/${values._id}`)
  }

  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={context}>
      <div id="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/catalog" element={<Catalog posts={posts} />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/create"
            element={<Create onCreateSubmit={onCreateSubmit} />}
          />
          <Route path="/catalog/:postId" element={<Details />} />
          <Route path="/catalog/:postId/edit" element={<EditPost onEditSubmit={onEditSubmit}/>} />
        </Routes>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
