import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

import { OwnedPostCard } from "./OwnedPostCard";
import { useNavigate } from "react-router-dom";
import { postServiceFactory } from "../../services/postService";
import { useService } from "../../hooks/useService";
import { usePostContext } from "../../contexts/postContext";


export const Profile = () => {
  
// const navigate = useNavigate();

const { userId } = useAuthContext();
const { posts } = usePostContext();

const myPosts = posts.filter( post => post._ownerId === userId)


// useEffect(() => {
//     postService.getUserPosts(userId)
//         .then(result => {
//             if (result.code === 404) {
//                 result = [];
//             }
//             setMyPosts(state => state = result);
//         }).catch(error => alert(error.message));
// }, [userId]);

  return ( 
  <section className="section lb text-muted">
    <div className="container">
        <div className="row grid-style">
            {myPosts.length !== 0 ? 
            myPosts.map(post => <OwnedPostCard key={post._id} {...post}/>) :
            <h4>There are no posts yet</h4>}
        </div>
        </div>
  </section>
  );
}; 
