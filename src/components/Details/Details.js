import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as postService from "../../services/postService";

export const Details = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    postService.getOne(postId).then((result) => {
      setPost(result);
    });
  }, [postId]);

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
            <div className="page-wrapper">
              <div className="blog-title-area">
                <p>{post.title}</p>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="banner-spot clearfix">
                      <div className="banner-img">
                        <img src={post.imgUrl} alt="" className="img-fluid" />
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
              </div>

              <div className="blog-content">{<p>{post.description}</p>}</div>
              <div className="blog-title-area">
                <button type="submit" className="btn btn-primary">
                  Edit
                </button>
                <button type="submit" className="btn btn-primary">
                  Delete
                </button>
              </div>

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
