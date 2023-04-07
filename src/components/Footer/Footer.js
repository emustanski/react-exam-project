import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="copyright">
              &copy; RecipeList. Design:
              <Link to="http://html.design">HTML Design</Link>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
