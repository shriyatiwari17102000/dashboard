import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const SignupTeacher = () => {
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/teachers");
    }
  }, []);

  const onChange = (e) => {
    let val = e.target.value;
    switch (e.target.name) {
      case "name":
        setName(val);
        break;

      case "education":
        setEducation(val);
        break;

      case "experience":
        setExperience(val);
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
        console.log("dfgsvhbzxjKNML");
        break;
    }
  };

  const addData = (e) => {
    e.preventDefault();
    let user = {
      name,
      education,
      experience,
      mobile,
      email,
      password,
    };
    console.log(user);

    // if (
    //   name === "" ||
    //   education === "" ||
    //   experience === "" ||
    //   mobile === "" ||
    //   email === "" ||
    //   password === ""
    // ) {
    //   setMessage("please fill out all the field");
    // }

    let x = true;
    if (name === "") {
      setMessage((prev) => ({
        ...prev,
        name: "plaease fill the name ",
      }));
      x = false;
    } else if (education === "") {
      setMessage((prev) => ({
        ...prev,
        education: "please fill education details",
      }));
      x = false;
    } else if (experience === "") {
      setMessage((prev) => ({
        ...prev,
        experience: "please fill experience ",
      }));
      x = false;
    } else if (mobile === "") {
      setMessage((prev) => ({
        ...prev,
        mobile: "please fill mobile number",
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
        .post("http://localhost:5000/api/teachersignup", user)
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

  console.log(message, "hhhhhhhhhhhhhhhhhhhhhhhhhhhh");
  return (
    <div>
      <Nav />

      <form onChange={onChange} onSubmit={addData} className="stu_form">
        <div>
          {" "}
          <h1 className="signtea_h1">Registration Form</h1>
        </div>
        <div className="div_tea">
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
              {" "}
              <span className="style_span">
                {" "}
                {message?.name && message.name}
              </span>
            </div>
          </div>
          <div>
            <label
              htmlFor="education"
              className="sign_tea "
              style={{ marginLeft: "-23.5rem" }}
            >
              {" "}
              Education
            </label>
            <br />
            <input type="text" name="education" className="tea_sign" />
            <div>
              <span className="style_span" style={{ marginLeft: "-17rem" }}>
                {" "}
                {message?.education && message.education}
              </span>
            </div>
          </div>
          <div>
            <label
              htmlFor="experience"
              className="sign_tea"
              style={{ marginLeft: "-23rem" }}
            >
              Experience
            </label>{" "}
            <br />
            <input type="text" name="experience" className="tea_sign" />
            <div>
              <span className="style_span">
                {message?.experience && message.experience}
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
            </label>{" "}
            <br />
            <input type="text" name="mobile" className="tea_sign" />
          </div>
          <div>
            <span className="style_span" style={{ marginLeft: "-18rem" }}>
              {" "}
              {message?.mobile && message.mobile}
            </span>
          </div>

          <div>
            <label
              htmlFor="email"
              className="sign_tea"
              style={{ marginLeft: "-24.7rem" }}
            >
              Email id
            </label>{" "}
            <br />
            <input type="text" name="email" className="tea_sign" />
            <div>
              <span className="style_span">
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
            </label>{" "}
            <br />
            <input type="text" name="password" className="tea_sign" />
            <div>
              {" "}
              <span className="style_span" style={{ marginLeft: "-17rem" }}>
                {message?.password && message.password}
              </span>
            </div>
          </div>
          {/* {message && message} */}
          <div>
            <button className="btn_assign">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupTeacher;
