import React from "react";
import { Link, useNavigate } from "react-router-dom";
import coaching_logo from "../images/coaching_logo.jpg";

const StuNav = () => {
  const auth = localStorage.getItem("user");
  // console.log(auth.name);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <div className="main_nav">
        {auth ? (
          <ul className="nav">
            <div>
              <img src={coaching_logo} className="nav_logo" />
            </div>
            <li className="nav_li">
              {" "}
              <Link to="/public" className="nav_link">
                Home
              </Link>
            </li>
            <li className="nav_li">
              {" "}
              <Link to="/assignmentfetch" className="nav_link">
                Assignments
              </Link>
            </li>
            <li className="nav_li">
              {" "}
              <Link to="/fetchschedule" className="nav_link">
                Schedule
              </Link>
            </li>
            <li className="nav_li">
              <Link
                onClick={logout}
                to="/login"
                className="nav_link"
                style={{ marginLeft: "43rem" }}
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
    </div>
  );
};

export default StuNav;
