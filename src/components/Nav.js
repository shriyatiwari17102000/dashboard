import React from "react";
import { Link, useNavigate } from "react-router-dom";
import coaching_logo from "../images/coaching_logo.jpg";

const Nav = () => {
  const auth = localStorage.getItem("user");
  // console.log(auth.name);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="main_nav">
      {auth ? (
        <ul className="nav">
          <div>
            <img src={coaching_logo} className="nav_logo" />
          </div>
          <li className="nav_li">
            {" "}
            <Link to="/" className="nav_link">
              Home
            </Link>
          </li>
          <li className="nav_li">
            {" "}
            <Link to="/assignment" className="nav_link">
              Assignment
            </Link>{" "}
          </li>
          <li className="nav_li">
            {" "}
            <Link to="/teachers" className="nav_link">
              Sign Up Teacher's
            </Link>
          </li>
          <li className="nav_li">
            {" "}
            <Link to="/student" className="nav_link">
              Sign up Student's
            </Link>
          </li>
          <li className="nav_li">
            {" "}
            <Link to="/scheduletable" className="nav_link">
              Schedule Upload
            </Link>
          </li>

          <li className="nav_li">
            <Link
              onClick={logout}
              to="/login"
              className="nav_link"
              style={{ marginLeft: "18rem" }}
            >
              Logout({JSON.parse(auth).email})
            </Link>
          </li>
        </ul>
      ) : (
        <div className="div_login">
          <ul className="login_link">
            <li className="login_li">
              <Link to="/login" className="login_user">
                User Login
              </Link>{" "}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
