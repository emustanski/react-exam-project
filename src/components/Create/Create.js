import { useState } from "react";

export const Create = ({ onCreateSubmit }) => {
  const [values, setValues] = useState({
    title: "",
    imgUrl: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onCreateSubmit(values);
  };
  return (
    <section className="section wb">
      <form id="create" onSubmit={onSubmit}>
        <div className="container">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              <div className="col-lg-5">
                <img
                  src="styles/images/create.jpg"
                  alt=""
                  className="img-fluid float-left"
                />
              </div>
              <div className="col-lg-7">
                <div className="form-wrapper">
                  <label>Title</label>
                  <input
                    value={values.title}
                    onChange={onChangeHandler}
                    type="text"
                    className="form-control"
                    placeholder="Choose your post title"
                    name="title"
                    id="title"
                  />
                  {/* <input value={values.}
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="title"
                  id="title"
                /> */}
                  <label>Image</label>
                  <input
                    value={values.imgUrl}
                    onChange={onChangeHandler}
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="imgUrl"
                    id="imgUrl"
                  />
                  <label>Description</label>
                  <textarea
                    value={values.description}
                    onChange={onChangeHandler}
                    className="form-control"
                    placeholder="Your post or recipe content"
                    name="description"
                    id="description"
                  ></textarea>
                  <button type="submit" className="create-btn btn btn-primary">
                    Post Recipe
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
