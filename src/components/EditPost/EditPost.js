import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import { postServiceFactory } from "../../services/postService";
import { useService } from "../../hooks/useService";
import { usePostContext } from "../../contexts/postContext";

export const EditPost = () => {
    const { onEditSubmit } = usePostContext();
    const { postId } = useParams();
    const postService =  useService(postServiceFactory)
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        description: '',
        imgUrl: '',
    }, onEditSubmit)

    useEffect(() => {
        postService.getOne(postId).then(result => {
            changeValues(result)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postId])

  return (
    <section className="section wb">
      <form id="create" method="post" onSubmit={onSubmit}>
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
                    onChange={changeHandler}
                    type="text"
                    className="form-control"
                    placeholder="Choose your post title"
                    name="title"
                    id="title"
                  />
                  <label>Image</label>
                  <input
                    value={values.imgUrl}
                    onChange={changeHandler}
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="imgUrl"
                    id="imgUrl"
                  />
                  <label>Description</label>
                  <textarea
                    value={values.description}
                    onChange={changeHandler}
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
