import { useAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { isAuthenticated, userEmail } = useAuthContext()
  return (
    <div>
      <section id="cta" className="jumbotron text-center">
        <div className="container">
          <Link to="/">
            <img
              src="/styles/images/version/food-logo.png"
              alt=""
              className="img-fluid"
            />
          </Link>
          <p>
          All things you need to know about food in one place
          </p>
        </div>
      </section>

      <header className="header">
        <div className="container">
          <nav className="navbar navbar-inverse navbar-toggleable-md">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#RecipeListmenu"
              aria-controls="RecipeListmenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-md-center"
              id="RecipeListmenu"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/catalog">
                    Catalog
                  </Link>
                </li>
                
                {isAuthenticated && (
                  <div className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile {userEmail}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/create">Create</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
                </li>
                </div>
                )}

                {!isAuthenticated && (
                  <div className="navbar-nav">
                    <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
                
                </div>
                )}
                {/* <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About Us
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
