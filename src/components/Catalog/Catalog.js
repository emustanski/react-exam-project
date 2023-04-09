import { usePostContext } from "../../contexts/postContext";
import { CatalogItem } from "./CatalogItem/CatalogItem";

export const Catalog = (
) => {
  
  const { posts } = usePostContext()
  
  return (
    <section className="section lb">
      <div className="container">
        <div className="row">
          {posts.map(x => 
          <CatalogItem key={x._id} post={x}/>
          )}
        </div>
      </div>
    </section>
  );
};
