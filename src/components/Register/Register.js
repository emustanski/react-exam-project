import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: '',
      password: '',
      rePassword: '',
    },
    onRegisterSubmit
  );
  return (
    <section className="section wb">
      <form id="register" method="POST" onSubmit={onSubmit}>
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
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={changeHandler}
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    id="register-password"
                    value={values.password}
                    onChange={changeHandler}
                  />
                  <label>Repeat password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Repeat Password"
                    name="rePassword"
                    id="re-password"
                    value={values.rePassword}
                    onChange={changeHandler}
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
      </form>
    </section>
  );
};
