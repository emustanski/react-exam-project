import { CatalogItem } from "./CatalogItem/CatalogItem";

export const Catalog = ({
  posts,
}) => {
  return (
    <section className="section lb">
      <div className="container">
        <div className="row">
          {posts.map(x => 
          <CatalogItem key={x._id} {...x}/>
          )}
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">
              <div className="widget">
                <h2 className="widget-title">Recent Posts</h2>
                <div className="blog-list-widget">
                  <div className="list-group">
                    <a
                      href="single.html"
                      className="list-group-item list-group-item-action flex-column align-items-start"
                    >
                      <div className="w-100 justify-content-between">
                        <img
                          src="upload/blog_square_14.jpg"
                          alt=""
                          className="img-fluid float-left"
                        />
                        <h5 className="mb-1">
                          5 Beautiful buildings you need to before dying
                        </h5>
                        <small>12 Jan, 2016</small>
                      </div>
                    </a>

                    <a
                      href="single.html"
                      className="list-group-item list-group-item-action flex-column align-items-start"
                    >
                      <div className="w-100 justify-content-between">
                        <img
                          src="upload/blog_square_12.jpg"
                          alt=""
                          className="img-fluid float-left"
                        />
                        <h5 className="mb-1">
                          Let's make an introduction for creative life
                        </h5>
                        <small>11 Jan, 2016</small>
                      </div>
                    </a>

                    <a
                      href="single.html"
                      className="list-group-item list-group-item-action flex-column align-items-start"
                    >
                      <div className="w-100 last-item justify-content-between">
                        <img
                          src="upload/blog_square_11.jpg"
                          alt=""
                          className="img-fluid float-left"
                        />
                        <h5 className="mb-1">
                          Did you see the most beautiful sea in the world?
                        </h5>
                        <small>07 Jan, 2016</small>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="widget">
                <h2 className="widget-title">Advertising</h2>
                <div className="banner-spot clearfix">
                  <div className="banner-img">
                    <img
                      src="upload/banner_03.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
