import { Link } from "react-router-dom";

export const CatalogItem = ({
  title,
  imgUrl,
  author,
  description
}) => {
  return (
    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
      <div className="page-wrapper">
        <div className="blog-list clearfix">
          <div className="blog-box row">
            <div className="col-md-4">
              <div className="post-media">
                <Link to="/details" title="">
                  <img
                    src={imgUrl}
                    alt=""
                    className="img-fluid"
                  />
                  <div className="hovereffect"></div>
                </Link>
              </div>
            </div>

            <div className="blog-meta big-meta col-md-8">
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>
                <Link to="/details" title="">
                  {title}
                </Link>
              </h4>
              <p>
                {description}
              </p>
              <small>
                <Link to="blog-category-01.html" title="">
                  Food
                </Link>
              </small>
              <small>
                <Link to="food-single.html" title="">
                  11 July, 2017
                </Link>
              </small>
              <small>
                <Link to="blog-author.html" title="">
                  by Matilda
                </Link>
              </small>
            </div>
          </div>
        </div>
        <hr className="invis" />
      </div>
    </div>
  );
};
