import { Link } from "react-router-dom"

export const OwnedPostCard = (
    _id,
    title,
    imgUrl,
) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
      <div className="blog-box">
        <div className="post-media">
          <Link to={`/catalog/${_id}`} title="">
            <img src={imgUrl} alt="" className="img-fluid" />
            <div className="hovereffect"></div>
          </Link>
        </div>
        <div className="blog-meta big-meta">
          <h4>
            <Link to={`/catalog/${_id}`} title="">
              {title}
            </Link>
          </h4>
          <small>18 July, 2017</small>
        </div>
      </div>
      <hr className="invis3" />
    </div>
    )
}