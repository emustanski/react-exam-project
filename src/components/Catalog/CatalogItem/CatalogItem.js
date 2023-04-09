import { Link } from "react-router-dom";

export const CatalogItem = ({ post }) => {

  const formattedTime = new Date(post._createdOn).toLocaleString();
  console.log(post)

  return (
    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
      <div className="page-wrapper">
        <div className="blog-list clearfix">
          <div className="blog-box row">
            <div className="col-md-4">
              <div className="post-media">
                <Link to={`/catalog/${post._id}`} title="">
                  <img src={post.imgUrl} alt="" className="img-fluid" />
                  <div className="hovereffect"></div>
                </Link>
              </div>
            </div>
    
            <div className="blog-meta big-meta col-md-8">
              <h4>
                <Link to={`/catalog/${post._id}`} title="">
                  {post.title}
                </Link>
              </h4>
              <div className="short-description">
                <p>{post.description}</p>
              </div>
              <small>{formattedTime}</small>
            </div>
          </div>
        </div>
        <hr className="invis" />
      </div>
    </div>
  );
};
