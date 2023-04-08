import { usePostContext } from "../../contexts/postContext";
import { HomeCatalogItem } from "./HomeCatalogItem/HomeCatalogItem";
import { Link } from "react-router-dom";

export const Home = () => {

  const { posts } = usePostContext()
  return (
    <section className="section lb text-muted">
      <div className="newest-posts">
        <h4> Here you can find the newest posts on our website </h4>
      </div>
      <div className="container">
        <div className="row grid-style">
          {posts.map((x) => (
            <HomeCatalogItem key={x._id} {...x} />
          ))}

          {posts.length === 0 && (
            
              <div className="newest-posts">
                <h4>There are no posts yet...</h4>
                <h4>
                  Create the first one <Link to="/create">Here</Link>
                </h4>
                </div>
              
          )}
        </div>
      </div>
    </section>
  );
};
