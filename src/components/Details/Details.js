import { Link, useParams } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

import { postServiceFactory } from "../../services/postService";
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";
import * as commentService from '../../services/commentService'
import { AddComment } from "./Comments/AddComment";
import { usePostContext } from "../../contexts/postContext";
import { postReducer } from "../../reducers/postReducer";

export const Details = () => {
  const { postId } = useParams();
  const { userId, isAuthenticated, email } = useAuthContext()
  const { deletePost } = usePostContext();
  const [post, setPost] = useState({});
  // const [post, dispatch] = useReducer(postReducer, {})
  const postService = useService(postServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      postService.getOne(postId),
      commentService.getAll(postId)
    ])
    .then(([postData, comments]) => {
      setPost({
        ...postData,
        comments,
      })
      // const postState = {
      //   ...postData,
      //   comments
      // };

      // dispatch({type: 'GAME_FETCH', payload: postState})
    });
  }, [postId]);

  const onCommentSubmit = async (values) => {
    const response = await commentService.create(postId, values.comment);

    setPost(state => ({
      ...state,
      comments: [
        ...state.comments,
        {
          ...response,
          author: {
            email
          }
        }
      ]
    }))

    // dispatch({
    //   type: 'COMMENT_ADD',
    //   payload: response,
    //   email
    // })
  }

  const isOwner = post._ownerId === userId;

  const onClickDelete = async () => {
  // eslint-disable-next-line no-restricted-globals
    const confirmation = confirm(`You will delete ${post.title}. Are you sure about that ? `);

    if(confirmation) {

      await postService.delete(post._id);
  
      deletePost(post._id);

      navigate('/catalog');
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
            <div className="page-wrapper">
              <div className="blog-title-area">
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
                  <small>21 July, 2017</small>
                  <small>by Jessica</small>
                </div>
              </div>

              <div className="blog-content">{<p>{post.description}</p>}</div>
              {isOwner && (
                <div className="blog-title-area">
                  <Link
                    to={`/catalog/${post._id}/edit`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                  <button className="btn btn-primary" onClick={onClickDelete}>
                    Delete
                  </button>
                </div>
              )}

              <hr className="invis1" />

              <div className="custombox clearfix">
                <h4 className="small-title">3 Comments</h4>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="comments-list">
                      {post.comments && post.comments.map(x => (
                        <div key={x._id} className="media">
                        <img alt=""/>
                        <div className="media-body">
                          <h4 className="media-heading user_name">
                            {x.author.email} <small>5 days ago</small>
                          </h4>
                          <p>
                            {x.comment}
                          </p>
                        </div>
                      </div>
                      ))}                 
                    </div>
                  </div>
                </div>
              </div>

              <hr className="invis1" />

              {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit}/>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
