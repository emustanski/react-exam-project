import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <section id="cta" className="jumbotron text-center">
        <div className="container">
          <a href="food-index.html">
            <img
              src="/styles/images/version/food-logo.png"
              alt=""
              className="img-fluid"
            />
          </a>
          <p>
            Each year we've hosted the Best Food Blog Awards, we're astounded at
            the depth, variety, creativity, and ingenuity of the food blogs
            nominated..
          </p>
          <Link to="/details" className="btn btn-primary">
            View Recipes
          </Link>
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
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/catalog">
                    Recipes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    {" "}
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="food-category.html">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/create">
                    Create
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
