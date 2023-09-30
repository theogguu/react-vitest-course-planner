import Course from "./Course";

const CourseList = ({ courses }) => (
  <div className="course-list">
      {Object.values(courses).map((value, index) => (
          <Course key={index} course={value} />
      ))}
  </div>
);

export default CourseList;
