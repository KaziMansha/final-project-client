/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus, handleDelete, deleteStudent} = props;
  const campus_id = campus.id;
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <img src = {campus.campusImg} style={{width: '50%', height: 'auto', objectFit: 'scale-down'}} alt={campus.name}></img>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      {campus.students.length > 0 ?
        (
        campus.students.map(student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>Student: {name}</h2>
              </Link>
              <button onClick={() => deleteStudent(student)}>Unenroll Student from Campus</button>
            </div>
          );
        })
        ):
        (<h3>No students are enrolled at this campus</h3>)
      }
      <br></br>
      <Link to={{
        pathname: `/newstudent`,
        query: {campus_id}
        }}>
        <button>Enroll New Student</button>
      </Link>
      <Link to={{
        pathname: `/students`,
        query: {campus_id}
        }}>
        <button>Enroll Existing Student</button>
      </Link>
      <button onClick={handleDelete}>Delete Campus</button>
    </div>
  );
};

export default CampusView;