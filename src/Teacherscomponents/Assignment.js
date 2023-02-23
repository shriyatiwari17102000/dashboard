import React, { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";

const Assignment = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState("");

  const uploadFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(formData, "form");
    formData.append("title", title);
    formData.append("date", date);
    formData.append("file", file);
    try {
      await axios
        .post("http://localhost:5000/api/upload", formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("user", JSON.stringify(res));
          alert(res.data.msg);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Nav />

      <form onSubmit={uploadFile} className="assign_div">
        <div>
          <h1 className="signtea_h1">Assignments</h1>
        </div>
        <div className="div_tea" style={{ height: "26rem" }}>
          <div>
            <input
              type="text"
              className="assignment_div"
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              placeholder="enter assignment title here"
              value={title}
              required
            />
          </div>
          <div>
            <input
              type="date"
              className="assignment_div s2"
              onChange={(e) => setDate(e.target.value)}
              name="date"
              value={date}
              required
            />
          </div>
          <div>
            <input
              type="file"
              className="assignment_div s2"
              style={{ padding: "6px" }}
              onChange={(e) => setFile(e.target.files[0])}
              name="file"
              accept="application/pdf"
              required
            />
          </div>

          <div className="btn_assign_div">
            <button className="btn_assign">Upload</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Assignment;

// import axios from "axios";
// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";

// const Assignment = () => {
//   const [name, setName] = useState("");
//   const [assignment, setAssignment] = useState("");

//   const onChange = (e) => {
//     let val = e.target.value;
//     switch (e.target.name) {
//       case "name":
//         setName(val);
//         break;
//       case "assignment":
//         setAssignment(val);
//         break;
//       default:
//         console.log("hello");
//     }
//   };

//   const upload = (e) => {
//     e.preventDefault();
//     console.log("click");
//     let user = {
//       name,
//       assignment,
//     };
//     console.log(user);
//     axios
//       .post("http://localhost:5000/api/assignment", user)
//       .then((res) => {
//         console.log(res.data);
//         alert(res.data);
//       })
//       .catch((error) => {
//         console.log("something went wrong", error);
//       });
//   };

//   return (
//     <form onSubmit={upload} onChange={onChange}>
//       <Form.Group controlId="formFileMultiple" className="mb-3 assignment">
//         <Form.Label>Assignment - 1</Form.Label>
//         <Form.Control type="file" multiple name="name" />
//         <Form.Label>Assignment - 2</Form.Label>
//         <Form.Control type="file" multiple name="assignment" />
//       </Form.Group>
//       <button>Upload</button>
//     </form>
//   );
// };

// export default Assignment;
