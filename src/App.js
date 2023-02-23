import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Nav from "./components/Nav";
import PrivateComponent from "./components/PrivateComponent";
import FetchAssignment from "./Studentcomponents/FetchAssignment";
import FetchSchedule from "./Studentcomponents/FetchSchedule";
import StudentDashboard from "./Studentcomponents/StudentDashboard";
import StuNav from "./Studentcomponents/StuNav";
import Assignment from "./Teacherscomponents/Assignment";
import ScheduleTable from "./Teacherscomponents/ScheduleTable";
import SignupStudent from "./Teacherscomponents/SignupStudent";
import SignupTeachers from "./Teacherscomponents/SignupTeacher";
import TeacherDashboard from "./Teacherscomponents/TeacherDashboard";

function App({ roll }) {
  return (
    <div className="App">
      {/* <SignupStudent /> */}

      <BrowserRouter>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/assignment" element={<Assignment />} />
            <Route path="/teachers" element={<SignupTeachers />} />
            <Route path="/student" element={<SignupStudent />} />
            <Route path="/scheduletable" element={<ScheduleTable />} />
            <Route path="/public" element={<StudentDashboard />} />
            <Route path="/assignmentfetch" element={<FetchAssignment />} />
            <Route path="/fetchschedule" element={<FetchSchedule />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
        <StuNav />
        <Routes>
          <Route element={<PrivateComponent />}>
        
         
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter> */}

      {/* <TeacherDashboard /> */}
      {/* <FetchSchedule /> */}
      {/* <Assignment /> */}
      {/* <FetchAssignment /> */}
    </div>
  );
}

export default App;
