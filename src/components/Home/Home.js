import { HomeCatalogItem } from "./HomeCatalogItem/HomeCatalogItem";
import { Link } from "react-router-dom";

export const Home = ({
  posts,
}) => {
  return (
    <section className="section lb text-muted">
        <div className="newest-posts">
      <h4> Here you can find the newest posts on our website </h4>
      </div>
      <div className="container">
        <div className="row grid-style">
        {posts.map(x => 
          <HomeCatalogItem key={x._id} {...x}/>
          )}

          {posts.length === 0 && (
            <div className="row grid-style">
          <div className="create-center">
          <p> <h4>Create the first one <Link to="/create">Here</Link></h4></p>
          </div>
          </div>
          )}   
        </div>
      </div>
    </section>
  );
};
