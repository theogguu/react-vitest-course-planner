import "./Course.css";

const Course = ({ course, id, selected, toggleSelected }) => (
  <div
    className={`course card m-1 p-2 ${
      selected.includes(id) ? "text-white bg-primary" : ""
    }`}
    onClick={() => toggleSelected(id)}
  >
    <div className="card-body">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          checked={`${selected.includes(id) ? "selected" : ""}`}
        />
        <label class="form-check-label" for="flexCheckDefault">
          <h4 className="card-title">
            {course.term} CS {course.number}
          </h4>
        </label>
      </div>
      <div className="card-text">{course.title}</div>
    </div>
    <div className="card-footer">{course.meets}</div>
  </div>
);

export default Course;
