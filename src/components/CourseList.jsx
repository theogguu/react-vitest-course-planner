import Course from "./Course";

const CourseList = ({ courses }) => (
  <div className="course-list">

      {Object.values(courses).map((value) => (

          <Course course={value} />

      ))}

  </div>
);

export default CourseList;
