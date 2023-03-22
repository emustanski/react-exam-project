import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <section className="section wb">
      <div className="container">
        <div className="col-lg-10 offset-lg-1">
          <div className="row">
            <div className="col-lg-5">
              <img
                src="styles/images/login.png"
                alt=""
                className="img-fluid float-left"
              />
            </div>
            <div className="col-lg-7">
              <div className="form-wrapper">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  name="email"
                  id="email"
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  id="login-password"
                />
                <p>
                  You don't have account ? <Link to="/register">Sign up</Link>
                </p>
                <button type="submit" className="create-btn btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
