import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

function ScheduleTable() {
  const [sno, setSno] = useState("");
  const [day, setDay] = useState("");
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/scheduletable");
    }
  }, []);

  const onChange = (e) => {
    let val = e.target.value;
    switch (e.target.name) {
      case "sno":
        setSno(val);
        break;

      case "day":
        setDay(val);
        break;

      case "subject":
        setSubject(val);
        break;

      case "time":
        setTime(val);
        break;

      default:
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let user = {
      sno,
      day,
      subject,
      time,
    };
    console.log(user);

    let x = true;
    if (sno === "") {
      setMessage((prev) => ({
        ...prev,
        sno: "please enter serial no",
      }));
      x = false;
    } else if (day === "") {
      setMessage((prev) => ({
        ...prev,
        day: "please enter day",
      }));
      x = false;
    } else if (subject === "") {
      setMessage((prev) => ({
        ...prev,
        subject: "please enter subject",
      }));
      x = false;
    } else if (time === "") {
      setMessage((prev) => ({
        ...prev,
        time: "enter time",
      }));
      x = false;
    }

    if (x) {
      axios
        .post("http://localhost:5000/api/schedule", user)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("user", JSON.stringify(res));

          alert(res.data);
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
    }
  };

  return (
    <div style={{ backgroundColor: "#a3d5c6" }}>
      <Nav />
      <form onChange={onChange} onSubmit={submitHandler} className="stu_form">
        <div>
          <h1 className="signtea_h1" style={{ marginLeft: "29rem" }}>
            Daily Schedule
          </h1>
        </div>
        <div
          className="div_tea"
          style={{ height: "44rem", marginLeft: "29rem" }}
        >
          <div>
            <label className="sign_tea" style={{ marginLeft: "-26rem" }}>
              Sno.
            </label>
            <br />
            <input type="text" name="sno" className="tea_sign" />
            <div>
              <span className="style_span" style={{ marginLeft: "-19srem" }}>
                {message?.sno && message.sno}
              </span>
            </div>
          </div>
          <div>
            <label className="sign_tea" style={{ marginLeft: "-26rem" }}>
              Day
            </label>
            <br />
            <input type="day" name="day" className="tea_sign" />
            <div>
              <span className="style_span" style={{ marginLeft: "-21rem" }}>
                {message?.day && message.day}
              </span>
            </div>
          </div>
          <div>
            <label className="sign_tea" style={{ marginLeft: "-24.5rem" }}>
              Subject
            </label>
            <br />

            <input type="text" name="subject" className="tea_sign" />
            <div>
              <span className="style_span">
                {message?.subject && message.subject}
              </span>
            </div>
          </div>
          <div>
            <label className="sign_tea" style={{ marginLeft: "-26rem" }}>
              Time
            </label>
            <br />
            <input type="text" name="time" className="tea_sign" />
            <div>
              <span className="style_span" style={{ marginLeft: "-24rem" }}>
                {message?.time && message.time}
              </span>
            </div>
          </div>
          <div>
            <button className="btn_assign">Submit</button>
          </div>
        </div>
      </form>
    </div>

    // <div style={{ backgroundColor: "#3f6e78" }}>
    //   {" "}
    //   <div style={{ paddingTop: "50px" }}>
    //     <h1> Daily Schedule </h1>
    //   </div>
    //   <div className="table_table">
    //     <Table bordered>
    //       <thead>
    //         <tr>
    //           <th>Days</th>
    //           <th>Subject</th>
    //           <th>Timing</th>{" "}
    //         </tr>
    //       </thead>{" "}
    //       <tbody>
    //         {" "}
    //         <tr>
    //           <td>Monday</td>
    //           <td>English</td>
    //           <td>4:30</td>{" "}
    //         </tr>{" "}
    //         <tr>
    //           <td>Tuesday</td>
    //           <td>Social Science</td>
    //           <td>12:00</td>{" "}
    //         </tr>{" "}
    //         <tr>
    //           <td>Wednesday</td>
    //           <td>Mathematics</td>
    //           <td>4:00</td>{" "}
    //         </tr>{" "}
    //         <tr>
    //           <td>Thursday</td>
    //           <td>Science</td>
    //           <td>6:00</td>{" "}
    //         </tr>{" "}
    //         <tr>
    //           <td>Friday</td>
    //           <td>Computer</td>
    //           <td>6:00</td>{" "}
    //         </tr>{" "}
    //         <tr>
    //           <td>Saturday</td>
    //           <td>Mathmatics and English</td>
    //           <td>6:00</td>
    //         </tr>
    //         <tr>
    //           <td>Sunday</td>
    //           <td>OFF</td>
    //           <td>OFF</td>
    //         </tr>
    //       </tbody>
    //     </Table>
    //     <div className="btn_div">
    //       <button onClick={upload} className="btn_inn">
    //         Upload
    //       </button>
    //     </div>
    //   </div>
  );
}

export default ScheduleTable;
