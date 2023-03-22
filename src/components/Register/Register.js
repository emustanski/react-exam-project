import { Link } from "react-router-dom";

export const Register = () => {
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
              <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  id="username"
                />
                <label>Email adress</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  name="email"
                  id="email"
                />
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  id="register-password"
                />
                <label>Repeat password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repeat Password"
                  name="re-password"
                  id="re-password"
                />
                <p>
                  You are member ?<Link to="/login"> Login</Link>
                </p>
                <button type="submit" className="create-btn btn btn-primary">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};