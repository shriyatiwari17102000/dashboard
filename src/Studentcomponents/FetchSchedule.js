import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import StuNav from "./StuNav";

const FetchSchedule = () => {
  const auth = localStorage.getItem("user");
  const [user, setUser] = useState("");

  console.log(user, "hhhhhhhhhhhhhhhhhhhhh");

  useEffect(() => {
    let file = JSON.parse(auth);
    axios
      .get("http://localhost:5000/api/fetchschedule", {
        headers: {
          Authorization: `Bearer ${file.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(194 219 255)", height: "700px" }}>
      <StuNav />
      <div style={{ paddingTop: "50px" }}>
        <h1 className="sche_h1"> Daily Time Table </h1>
      </div>

      <div className="table_table">
        <Table bordered>
          <thead className="sche_thead">
            <tr>
              <th>S No.</th>
              <th>Day</th>
              <th>Subject</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.map((data) => {
                return (
                  <tr>
                    <td> {data.sno} </td>
                    <td> {data.day} </td>
                    <td> {data.subject} </td>
                    <td> {data.time} </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default FetchSchedule;
