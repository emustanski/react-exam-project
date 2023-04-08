import { useForm } from "../../../hooks/useForm";

export const AddComment = ({ onCommentSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: '',
    },
    onCommentSubmit
  );

  return (
    <div className="custombox clearfix">
      <h4 className="small-title">Leave a Comment</h4>
      <div className="row">
        <div className="col-lg-12">
          <form className="form-wrapper" onSubmit={onSubmit}>
            <textarea
              className="form-control"
              placeholder="Your comment"
              name="comment"
              value={values.comment}
              onChange={changeHandler}
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Submit Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
