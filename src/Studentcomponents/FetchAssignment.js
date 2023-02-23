import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import StuNav from "./StuNav";

const FetchAssignment = () => {
  const auth = localStorage.getItem("user");

  const [state, setState] = useState([]);

  useEffect(() => {
    let file = JSON.parse(auth);
    console.log(file, "bcnxcjdjdb");
    console.log(file.token, "ttttttttttttttttttttttttttttttttt");
    axios
      .get(
        "http://localhost:5000/api/getAssignment",

        {
          headers: {
            Authorization: `Bearer ${file.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      })
      .catch(() => {
        console.log("something went wrong");
      });
  }, []);

  return (
    <div className="main_fetch">
      <StuNav />
      <form style={{ paddingTop: "56px" }}>
        <div className="fetchassign">
          <Table bordered>
            <thead className="fetchass_thead">
              <tr>
                <th className="th1">Title</th>
                <th className="th1">Date</th>
                <th className="th1">Assignment</th>
              </tr>
            </thead>
            <tbody style={{ fontFamily: "cursive" }}>
              {state.map((data) => {
                return (
                  <tr style={{ color: "black" }}>
                    <td>{data.title}</td>
                    <td>{data.date}</td>
                    {/* <td>
                      <img
                        src={"http://localhost:5000/api/postFiles/" + data.file}
                      />
                    </td> */}
                    <td>{data.file}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </form>
    </div>
  );
};

export default FetchAssignment;

// res.send.roll == student
