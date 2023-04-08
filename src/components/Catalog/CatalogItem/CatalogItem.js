import { Link } from "react-router-dom";

export const CatalogItem = ({ title, imgUrl, author, description, _id }) => {
  return (
    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
      <div className="page-wrapper">
        <div className="blog-list clearfix">
          <div className="blog-box row">
            <div className="col-md-4">
              <div className="post-media">
                <Link to={`/catalog/${_id}`} title="">
                  <img src={imgUrl} alt="" className="img-fluid" />
                  <div className="hovereffect"></div>
                </Link>
              </div>
            </div>

            <div className="blog-meta big-meta col-md-8">
              <h4>
                <Link to={`/catalog/${_id}`} title="">
                  {title}
                </Link>
              </h4>
              <div className="short-description">
                <p>{description}</p>
              </div>
              <small>11 July, 2017</small>
              <small>by Matilda</small>
            </div>
          </div>
        </div>
        <hr className="invis" />
      </div>
    </div>
  );
};
