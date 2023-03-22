import { Link } from "react-router-dom";

export const Details = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
            <div className="page-wrapper">
              <div className="blog-title-area">
                {/* <!-- <ol className="breadcrumb hidden-xs-down">
                                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Blog</Link></li>
                                    <li className="breadcrumb-item active">Quick n Easy Homemade Pizza Recipe</li>
                                </ol> --> */}

                <p><h3>Quick n Easy Homemade Pizza Recipe</h3></p>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="banner-spot clearfix">
                      <div className="banner-img">
                        <img
                          src="/styles/images/homemade-pizza-dough.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-meta big-meta">
                  <small>
                    <Link to="single.html" title="">
                      21 July, 2017
                    </Link>
                  </small>
                  <small>
                    <Link to="blog-author.html" title="">
                      by Jessica
                    </Link>
                  </small>
                  <small>
                    <Link to="#" title="">
                      <i className="fa fa-eye"></i> 2344
                    </Link>
                  </small>
                </div>

                {/* <div className="post-sharing">
                                    <ul className="list-inline">
                                        <li><Link to="#" className="fb-button btn btn-primary"><i className="fa fa-facebook"></i> <span className="down-mobile">Share on Facebook</span></Link></li>
                                        <li><Link to="#" className="tw-button btn btn-primary"><i className="fa fa-twitter"></i> <span className="down-mobile">Tweet on Twitter</span></Link></li>
                                        <li><Link to="#" className="gp-button btn btn-primary"><i className="fa fa-google-plus"></i></Link></li>
                                    </ul>
                                </div>  */}
              </div>

              <div className="blog-content">
                {/* <p>
                  In lobortis pharetra mattis. Morbi nec nibh iaculis,bibendum
                  augue a, ultrices nulla. Nunc velit ante, lacinia id tincidunt
                  eget, faucibus nec nisl. In mauris purus, bibendum et gravida
                  dignissim, venenatis commodo lacus. Duis consectetur quis nisi
                  nec accumsan. Pellentesque enim velit, ut tempor turpis.
                  Mauris felis neque, egestas in lobortis et,iaculis at nunc ac,
                  rhoncus sagittis ipsum.{" "}
                </p>

                <h3>
                  <strong>
                    Maecenas non convallis quam, eu sodales justo. Pellentesque
                    quis lectus elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </strong>
                </h3>

                <p>
                  Donec nec metus sed leo sollicitudin ornare sed consequat
                  neque. Aliquam iaculis neque quis dui venenatis, eget posuere
                  felis viverra. Ut sit amet feugiat elit, nec elementum velit.
                  Sed eu nisl convallis, efficitur turpis eu, euismod nunc.
                  Proin neque enim, malesuada non lobortis nec, facilisis et
                  lectus. Ie consectetur. Nam eget neque ac ex fringilla
                  dignissim eu ac est. Nunc et nisl vel odio posuere.{" "}
                </p>

                <p>
                  Vivamus non condimentum orci. Pellentesque venenatis nibh sit
                  amet est vehicula lobortis. Cras eget aliquet eros. Nunc
                  lectus elit, suscipit at nunc sed, finibus imperdiet ipsum.
                  Maecenas dapibus neque sodales nulla finibus volutpat. Integer
                  pulvinar massa vitae ultrices posuere. Proin ut tempor turpis.
                  Mauris felis neque, egestas in lobortis et, sodales non ante.
                  Ut vestibulum libero quis luctus tempus. Nullam eget dignissim
                  massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam
                  et hendrerit nisl massa nunc.{" "}
                </p>

                <h3>
                  <strong>
                    Nam non velit est. Sed lobortis arcu vitae nunc molestie
                    consectetur. Nam eget neque ac ex fringilla dignissim eu ac
                    est. Nunc et nisl vel odio posuere.{" "}
                  </strong>
                </h3>

                <p>
                  Vivamus non condimentum orci. Pellentesque venenatis nibh sit
                  amet est vehicula lobortis. Cras eget aliquet eros. Nunc
                  lectus elit, suscipit at nunc sed, finibus imperdiet ipsum.
                  Maecenas dapibus neque sodales nulla finibus volutpat. Integer
                  pulvinar massa vitae ultrices posuere. Proin ut tempor turpis.
                  Mauris felis neque, egestas in lobortis et, sodales non ante.
                  Ut vestibulum libero quis luctus tempus. Nullam eget dignissim
                  massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam
                  et hendrerit nisl massa nunc.{" "}
                </p>

                <p>
                  Morbi pharetra porta consequat. Aenean et diam sapien.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Pellentesque dictum ligula iaculis, feugiat metus eu,
                  sollicitudin ex. Quisque eu ullamcorper ligula. In vel ex ac
                  purus finibus viverra. Maecenas pretium lobortis turpis. Fusce
                  lacinia nisi in tortor massa nunc.
                </p> */}
              </div>

              {/* <!-- 
                                <div className="tag-cloud-single">
                                    <span>Tags</span>
                                    <small><Link to="#" title="">lifestyle</Link></small>
                                    <small><Link to="#" title="">colorful</Link></small>
                                    <small><Link to="#" title="">trending</Link></small>
                                    <small><Link to="#" title="">another tag</Link></small>
                                </div>


                                
                            </div> --> */}
              <div className="blog-title-area">
                <button type="submit" className="btn btn-primary">
                  Edit
                </button>
                <button type="submit" className="btn btn-primary">
                  Delete
                </button>
              </div>
              {/* <!-- <hr className="invis1"> --> */}

              {/* <!-- <div className="custombox prevnextpost clearfix">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="blog-list-widget">
                                            <div className="list-group">
                                                <Link to="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                                    <div className="w-100 justify-content-between text-right">
                                                        <img src="upload/blog_square_08.jpg" alt="" className="img-fluid float-right">
                                                        <h5 className="mb-1">5 Beautiful buildings you need to before dying</h5>
                                                        <small>Prev Post</small>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="blog-list-widget">
                                            <div className="list-group">
                                                <Link to="single.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                                    <div className="w-100 justify-content-between">
                                                        <img src="upload/blog_square_09.jpg" alt="" className="img-fluid float-left">
                                                        <h5 className="mb-1">Let's make an introduction to the glorious world of history</h5>
                                                        <small>Next Post</small>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> --> */}

              <div className="custombox authorbox clearfix">
                <h4 className="small-title">About author</h4>
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                    <img
                      src="/styles/upload/author.jpg"
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>

                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                    <h4>
                      <Link to="#">Jessica</Link>
                    </h4>
                    <p>
                      Quisque sed tristique felis. Lorem{" "}
                      <Link to="#">visit my website</Link> amet, consectetur
                      adipiscing elit. Phasellus quis mi auctor, tincidunt nisl
                      eget, finibus odio. Duis tempus elit quis risus congue
                      feugiat. Thanks for stop RecipeList!
                    </p>

                    <div className="topsocial">
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Facebook"
                      >
                        <i className="fa fa-facebook"></i>
                      </Link>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Youtube"
                      >
                        <i className="fa fa-youtube"></i>
                      </Link>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Pinterest"
                      >
                        <i className="fa fa-pinterest"></i>
                      </Link>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </Link>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Instagram"
                      >
                        <i className="fa fa-instagram"></i>
                      </Link>
                      <Link
                        to="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Website"
                      >
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="invis1" />

              <div className="custombox clearfix">
                <h4 className="small-title">3 Comments</h4>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="comments-list">
                      <div className="media">
                        <Link to="#" className="media-left">
                          <img
                            src="/styles/upload/author.jpg"
                            alt=""
                            className="rounded-circle"
                          />
                        </Link>
                        <div className="media-body">
                          <h4 className="media-heading user_name">
                            Amanda Martines <small>5 days ago</small>
                          </h4>
                          <p>
                            Exercitation photo booth stumptown tote bag Banksy,
                            elit small batch freegan sed. Craft beer elit seitan
                            exercitation, photo booth et 8-bit kale chips
                            proident chillwave deep v laborum. Aliquip veniam
                            delectus, Marfa eiusmod Pinterest in do umami
                            readymade swag. Selfies iPhone Kickstarter, drinking
                            vinegar jean.
                          </p>
                          <Link to="#" className="btn btn-primary btn-sm">
                            Reply
                          </Link>
                        </div>
                      </div>
                      <div className="media">
                        <Link to="#" className="media-left">
                          <img
                            src="/styles/upload/author_01.jpg"
                            alt=""
                            className="rounded-circle"
                          />
                        </Link>
                        <div className="media-body">
                          <h4 className="media-heading user_name">
                            Baltej Singh <small>5 days ago</small>
                          </h4>

                          <p>
                            Drinking vinegar stumptown yr pop-up artisan sunt.
                            Deep v cliche lomo biodiesel Neutra selfies. Shorts
                            fixie consequat flexitarian four loko tempor duis
                            single-origin coffee. Banksy, elit small.
                          </p>

                          <Link to="#" className="btn btn-primary btn-sm">
                            Reply
                          </Link>
                        </div>
                      </div>
                      <div className="media last-child">
                        <Link to="#" className="media-left">
                          <img
                            src="/styles/upload/author_02.jpg"
                            alt=""
                            className="rounded-circle"
                          />
                        </Link>
                        <div className="media-body">
                          <h4 className="media-heading user_name">
                            Marie Johnson <small>5 days ago</small>
                          </h4>
                          <p>
                            Kickstarter seitan retro. Drinking vinegar stumptown
                            yr pop-up artisan sunt. Deep v cliche lomo biodiesel
                            Neutra selfies. Shorts fixie consequat flexitarian
                            four loko tempor duis single-origin coffee. Banksy,
                            elit small.
                          </p>

                          <Link to="#" className="btn btn-primary btn-sm">
                            Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="invis1" />

              <div className="custombox clearfix">
                <h4 className="small-title">Leave a Comment</h4>
                <div className="row">
                  <div className="col-lg-12">
                    <form className="form-wrapper">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                      />
                      <textarea
                        className="form-control"
                        placeholder="Your comment"
                      ></textarea>
                      <button type="submit" className="btn btn-primary">
                        Submit Comment
                      </button>
                    </form>
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
