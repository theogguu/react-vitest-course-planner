import Course from "../Course";
import './CourseList.css'

const CourseList = ({ courses, term }) => {

  const filteredCourses = Object.values(courses.courses).filter((course) => course.term === term);
  return (
    <div className="course-list">
      {
        filteredCourses.map((value, index) => 
        <Course key={index} course={value} />
        )
      }
    </div>
  );
}

export default CourseList;
