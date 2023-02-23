import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import coaching_logo from "../images/coaching_logo.jpg";
import StuNav from "../Studentcomponents/StuNav";
import Nav from "./Nav";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
  //     navigate("/");
  //   }

  // if (state.roll === "student") {
  //   navigate("/studentdashboard");
  // } else {
  //   navigate("/teacherdashboard");
  // }
  // }, []);

  const onChange = (e) => {
    let val = e.target.value;
    switch (e.target.name) {
      case "email":
        setEmail(val);
        break;
      case "password":
        setPassword(val);
        break;

      default:
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let user = {
      email,
      password,
    };
    console.log(user);
    axios
      .post("http://localhost:5000/api/login", user)
      .then((res) => {
        console.log(res.data);

        if (!res.data.user) {
          alert(res.data.msg);
        } else {
          localStorage.setItem("user", JSON.stringify(res.data));

          let roll = res.data.roll;
          if (roll === "teacher") {
            navigate("/teacher-dashboard");
          } else {
            navigate("/public");
          }
        }
        console.log(res.data.roll, "hello");
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };

  return (
    <div>
      <div className="nav_login">
        <img src={coaching_logo} className="img_logo" />
        <p className="img_para_login">Coaching Classes</p>
      </div>
      <div className="div_main_login">
        <div className="login_p">
          <p style={{ color: "#335c65" }}>
            “Coaching is unlocking a person's potential to maximize their
            growth."
          </p>
        </div>
        <form
          onSubmit={submitHandler}
          onChange={onChange}
          className="login_form"
        >
          <div>
            <div>
              <label
                htmlFor="email"
                className="login_label"
                style={{ paddingTop: "41px" }}
              >
                Email
              </label>
              <br />
              <input type="text" name="email" className="login_input" />
            </div>
            <div>
              <label htmlFor="password" className="login_label">
                Password
              </label>
              <br />
              <input type="password" name="password" className="login_input" />
            </div>
            <div className="login_btn_div">
              <button className="login_btn">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
