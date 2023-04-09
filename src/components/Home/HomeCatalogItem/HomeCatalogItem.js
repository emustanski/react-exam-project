import { Link } from "react-router-dom";

export const HomeCatalogItem = ({
  post,
}) => {
  const formattedTime = new Date(post._createdOn).toLocaleString();
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
      <div className="blog-box">
        <div className="post-media">
          <Link to={`/catalog/${post._id}`} title="">
            <img src={post.imgUrl} alt="" className="img-fluid" />
            <div className="hovereffect"></div>
          </Link>
        </div>
        <div className="blog-meta big-meta">
          <h4>
            <Link to={`/catalog/${post._id}`} title="">
              {post.title}
            </Link>
          </h4>
          <small>{formattedTime}</small>
        </div>
      </div>
      <hr className="invis3" />
    </div>
  );
};
