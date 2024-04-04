import { Link } from "react-router-dom";
import StudentLink from "./StudentLink";
import { useState, useEffect } from "react";
import "./StudentList.css";
import { getAllStudents } from "../../models/Student";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function StudentList() {
  const [students, setStudents] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllStudents();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setStudents(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (load === null) {
    return (
      <>
        <p>Students not found</p>
      </>
    );
  }
  if (!loaded) {
    return (
      <>
        <p>Students are loading...</p>
      </>
    );
  }

  return (
    <>
      
        <div className="student-title-container">
          <h1 className="title is-1">Student list form</h1>
        </div>
        <div className="StudentListContainer is-flex-wrap-wrap ">
        {students.map((student, index) => (
          <StudentLink
            className="student-container"
            key={index}
            name={student.name}
            id={student._id}
          />
        ))}
        </div>
        <Link to={"/"} className="studentIcon">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" color="black" />
        </Link>
      
    </>
  );
}
