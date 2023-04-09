import { OwnedPostCard } from "./OwnedPostCard";
import { useAuthContext } from "../../contexts/AuthContext";
import { usePostContext } from "../../contexts/postContext";


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
          <h4>There are no posts yet</h4>
        )}
      </div>
    </div>
  </section>
  );
}; 
