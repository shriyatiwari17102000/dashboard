import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const SignupStudent = () => {
  const [name, setName] = useState("");
  const [standard, setStandard] = useState("");
  const [school, setSchool] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/student");
    }
  }, []);

  const onChange = (e) => {
    let val = e.target.value;
    switch (e.target.name) {
      case "name":
        setName(val);
        break;

      case "standard":
        setStandard(val);
        break;

      case "school":
        setSchool(val);
        break;

      case "mobile":
        setMobile(val);
        break;

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

  const studentSignup = (e) => {
    e.preventDefault();
    let user = {
      name,
      standard,
      school,
      mobile,
      email,
      password,
    };
    console.log(user);

    let x = true;

    if (name === "") {
      setMessage((prev) => ({
        ...prev,
        name: "please fill name",
      }));
      x = false;
    } else if (standard === "") {
      setMessage((prev) => ({
        ...prev,
        standard: "please fill your class name",
      }));
      x = false;
    } else if (school === "") {
      setMessage((prev) => ({
        ...prev,
        school: "please enter school name",
      }));
      x = false;
    } else if (mobile === "") {
      setMessage((prev) => ({
        ...prev,
        mobile: "please enter mobile number",
      }));
      x = false;
    } else if (email === "") {
      setMessage((prev) => ({
        ...prev,
        email: "please enter email",
      }));
      x = false;
    } else if (password === "") {
      setMessage((prev) => ({
        ...prev,
        password: "please generate password",
      }));
      x = false;
    }

    if (x) {
      axios
        .post("http://localhost:5000/api/studentsignup", user)
        .then((res) => {
          console.log(res.data);
          alert(res.data);
          localStorage.setItem("user", JSON.stringify(res));
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
    }
  };

  return (
    <div>
      <Nav />

      <form onChange={onChange} onSubmit={studentSignup} className="stu_form">
        <div>
          <h1 className="signtea_h1 sh1">Students Registration</h1>
        </div>
        <div className="div_stu">
          <div>
            <label
              htmlFor="name"
              className="sign_tea"
              style={{ paddingTop: "41px", marginLeft: "-25.5rem" }}
            >
              Name
            </label>
            <br />
            <input type="text" name="name" className="tea_sign" />
            <div>
              <span className="style_span" style={{ marginLeft: "-22rem" }}>
                {message?.name && message.name}
              </span>
            </div>
          </div>
          <div>
            <label
              htmlFor="standard"
              className="sign_tea"
              style={{ marginLeft: "-23.5rem" }}
            >
              Standard
            </label>
            <br />
            <input type="text" name="standard" className="tea_sign" />
            <div>
              <span className="style_span" style={{ marginLeft: "-17rem" }}>
                {message?.standard && message.standard}{" "}
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="school"
              className="sign_tea"
              style={{ marginLeft: "-25rem" }}
            >
              School
            </label>
            <br />
            <input type="text" name="school" className="tea_sign" />
            <div>
              <span className="style_span">
                {" "}
                {message?.school && message.school}
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="mobile"
              className="sign_tea"
              style={{ marginLeft: "-22.7rem" }}
            >
              Mobile no.
            </label>
            <br />
            <input type="text" name="mobile" className="tea_sign" />
            <div>
              <span className="style_span">
                {" "}
                {message?.mobile && message.mobile}
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="sign_tea"
              style={{ marginLeft: "-24.7rem" }}
            >
              Email id
            </label>
            <br />
            <input type="text" name="email" className="tea_sign" />
            <div>
              <span className="style_span">
                {" "}
                {message?.email && message.email}
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="sign_tea"
              style={{ marginLeft: "-23.8rem" }}
            >
              Password
            </label>
            <br />
            <input type="password" name="password" className="tea_sign" />
            <div>
              <span className="style_span" style={{ marginLeft: "-17rem" }}>
                {" "}
                {message?.password && message.password}
              </span>
            </div>
          </div>
          <div>
            <button className="btn_assign">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupStudent;
