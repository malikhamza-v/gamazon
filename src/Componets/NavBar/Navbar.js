import React from "react";
import "./navbar.css";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Context/StateContext";
import { auth } from "../../firebase";

function Navbar() {
  const [{ cart, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none", margin: "auto" }}>
        {/* <div> */}
        <h1 className="navbar__logo">Gamazon.</h1>
        {/* </div> */}
      </Link>
      <div className="navbar__search" id="navbarSearch">
        <input type="text" className="navbar__searchinput" />
        <SearchIcon className="navbar__searchicon" />
      </div>
      <div className="navbar__items">
        <div className="navbar__item" id="navbarItem" onClick={handleAuth}>
          <Link
            to={!user && "/login"}
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>
              Hello{" "}
              {user ? (
                <strong>{user.email.replace("@gmail.com", "")}</strong>
              ) : (
                "Guest"
              )}
            </span>
            <span className="navbar__itemheading2">
              {user ? "Sign out" : "Sign In"}
            </span>
          </Link>
        </div>
        <div className="navbar__item" id="navbarItem">
          <span>Register</span>
          <span className="navbar__itemheading2">& Order</span>
        </div>
        <div className="navbar__item" id="navbarItem">
          <span>Your</span>
          <span className="navbar__itemheading2">Prime</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none", color: "white" }}>
          <div className="navbar__cartsection">
            <LocalMallIcon />
            <span>{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
