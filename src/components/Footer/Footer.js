import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="widget">
                            <div className="footer-text text-center">
                                <Link to="food-index.html"><img src="images/version/food-logo.png" alt="" className="img-fluid"/></Link>
                                <p>© 2017 RecipeList Pty Ltd. Trademarks and brands are the propertyof their respective owners. </p>
                                <div className="social">
                                    <Link to="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></Link>              
                                    <Link to="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></Link>
                                    <Link to="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></Link>
                                    <Link to="#" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i className="fa fa-google-plus"></i></Link>
                                    <Link to="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

        <div className="row">
          <div className="col-md-12 text-center">
            <div className="copyright">
              &copy; RecipeList. Design:{" "}
              <Link to="http://html.design">HTML Design</Link>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
