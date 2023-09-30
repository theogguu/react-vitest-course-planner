import "./CourseList.css";

const Course = ({ course }) => (
  <div className="card m-1 p-2">
    <div className="card-body">
      <h3 className="card-title">
        {course.term} CS {course.number}
      </h3>
      {course.title}
    </div>
    <div className="card-footer">{course.meets}</div>
  </div>
);

export default Course;
