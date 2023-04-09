import { OwnedPostCard } from "./OwnedPostCard";
import { useAuthContext } from "../../contexts/AuthContext";
import { usePostContext } from "../../contexts/postContext";
import { Link } from "react-router-dom";


export const Profile = () => {
  
const { userId, email } = useAuthContext();
const { posts } = usePostContext();
const myPosts = posts.filter(x => x._ownerId === userId)

  return ( 
    <section className="section lb text-muted">
    <div className="container">
    <div className="newest-posts">
        <h4> Hello, {email} ! </h4>
      </div>
      <div className="row grid-style">
        {myPosts.length !== 0 ? (
          myPosts.map((x) =>
             (
              <OwnedPostCard key={x._id} post={x} />
            )
          )
        ) : (
          <div className="newest-posts">
          <h4>Oooops...</h4>
          <hr className="invis1"/>
          <h4>You don't have posts yet...</h4>
          <hr className="invis1"/>
          <Link to ={"/create"} className="btn btn-primary"> Create here</Link>
          </div>
        )}
      </div>
    </div>
  </section>
  );
}; 
