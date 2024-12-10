import AppNav from "../components/AppNav";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
function Homepage() {
  const activeStyle = {
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>
      <Link to="app">App</Link>
    </div>
  );
}

export default Homepage;
