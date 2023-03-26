import { Link } from "react-router-dom";

export const HomeCatalogItem = ({
  title,
  imgUrl,
  author,
  description,
  _id,
}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
      <div className="blog-box">
        <div className="post-media">
          <Link to={`/catalog/${_id}`} title="">
            <span className="detail veg">Veg</span>
            <img src={imgUrl} alt="" className="img-fluid" />
            <div className="hovereffect"></div>
          </Link>
        </div>
        <div className="blog-meta big-meta">
          <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <h4>
            <Link to={`/catalog/${_id}`} title="">
              {title}
            </Link>
          </h4>
          <small>
            <Link to="food-single.html" title="">
              18 July, 2017
            </Link>
          </small>
          <small>
            <Link to="#" title="">
              by Matilda
            </Link>
          </small>
        </div>
      </div>
      <hr className="invis3" />
    </div>
  );
};
