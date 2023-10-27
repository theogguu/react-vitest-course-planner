import "./Course.css";
import { canToggleCourse } from "../../utilities/isConflict";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

const Course = ({ profile, id, course, selected, toggleSelected }) => (
  <div
    className={
      `card m-1 p-2
      ${
        !canToggleCourse(selected, course)
          ? "text-black text-opacity-25 bg-danger bg-opacity-25"
          : "selectable"
      } 
      ${selected.includes(course) ? "text-white bg-primary bg-opacity-75" : ""}`
      // bg-danger if course is not toggleable
      // bg-primary if course is selected
    }
    onClick={() => toggleSelected(course)}
  >
    <div className="card-body">
      <h4 className="card-title">
          <div className="row">
            <div className="col-9">
              {course.term} CS {course.number}
            </div>
            <div className="col m-0 p-0 edit-button">
              {/* only link to edit if profile is admin */}
              {profile?.isAdmin && 
                <Link to={`/edit/${id}`}>
                  <button className="btn">
                    <i className="bi bi-pencil-square" />
                  </button>
                </Link>
              }
            </div>
        </div>
      </h4>

      <div className="card-text">{course.title}</div>
    </div>
    <div className="card-footer">{course.meets}</div>
  </div>
);

export default Course;
