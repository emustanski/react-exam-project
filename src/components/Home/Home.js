import { HomeCatalogItem } from "./HomeCatalogItem/HomeCatalogItem";

export const Home = ({
  posts,
}) => {
  return (
    <section className="section lb text-muted">
      <div className="container">
        <div className="row grid-style">
        {posts.map(x => 
          <HomeCatalogItem key={x._id} {...x}/>
          )}   
        </div>
      </div>
    </section>
  );
};
