import Course from "../Course/Course";
import './CourseList.css'

const CourseList = ({ courses, term, selected, toggleSelected }) => {

  // due to how the .json is structured, we need to access courses.courses
  const filteredCourses = Object.values(courses.courses).filter((course) => course.term === term);
  return (
    <div className="course-list">
      {
        filteredCourses.map(course => 
        <Course course={course} id={`${course.term} CS ${course.number}, ${course.title}`} selected={selected} toggleSelected={toggleSelected} />)
      }
    </div>
  );
}

export default CourseList;
