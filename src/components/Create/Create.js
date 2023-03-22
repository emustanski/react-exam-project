export const Create = () => {
  return (
    <section className="section wb">
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="Choose your post title"
                  name="title"
                  id="title"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="title"
                  id="title"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="title"
                  id="title"
                />
                <textarea
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
    </section>
  );
};
