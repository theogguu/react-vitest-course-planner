import "./Course.css";
import { canToggleCourse } from "../../utilities/is-conflict";

const Course = ({ course, selected, toggleSelected }) => (
  <div
    className={
      `course card m-1 p-2 
      ${!canToggleCourse(selected, course) ? "text-white bg-danger" : ""} 
      ${selected.includes(course) ? "text-white bg-primary" : ""}`
      // bg-danger if course is not toggleable
      // bg-primary if course is selected
    }
    onClick={() => toggleSelected(course)}
  >
    <div className="card-body">
      <h4 className="card-title">
        {course.term} CS {course.number}
      </h4>
      <div className="card-text">{course.title}</div>
    </div>
    <div className="card-footer">{course.meets}</div>
  </div>
);

export default Course;
