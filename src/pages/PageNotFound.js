import { Link } from "react-router-dom";
import PageNotFoundImage from "../images/pagenotfound.png";

export const PageNotFound = () => {
  return (
    <div className="pagenotfound">
      <p style={{fontSize:"25px"}}>404 Page Not Found</p>
      <img src={PageNotFoundImage} />
    
      <Link to="/">
        <button>Go to homepage</button>
      </Link>
  </div>
  )
}
