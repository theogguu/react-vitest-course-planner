import "./Course.css";
import { hasConflictWithMeetingList } from "../../utilities/is-conflict";

const Course = ({ course, id, selected, toggleSelected }) => (
  <div
    className={`course card m-1 p-2 ${
      selected.includes(course) ? "text-white bg-primary" : ""
    }`}
    // onClick={() => toggleSelected(id)}
    onClick={() => toggleSelected(course)}
  >
    <div className="card-body">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          checked={selected.includes(course)}
        />
        <label class="form-check-label" for="flexCheckDefault">
          <h4 className="card-title">
            {course.term} CS {course.number}
            {`${hasConflictWithMeetingList(selected.map((element) => element.meets), course.meets)}`}

          </h4>
        </label>
      </div>
      <div className="card-text">{course.title}</div>
    </div>
    <div className="card-footer">{course.meets}</div>
  </div>
);

export default Course;
