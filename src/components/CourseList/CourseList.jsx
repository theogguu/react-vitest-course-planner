import Course from "../Course/Course";
import "./CourseList.css";

const CourseList = ({profile, courses, term, selected, toggleSelected }) => {
  // due to how the .json is structured, we need to access courses.courses
  const filteredCourseEntries = Object.entries(courses).filter(
    ([id, course]) => {
      // a courseEntry is...
      // key: str ("F211")
      // val: Obj {term:, number:, ...}
      return course.term === term;
    }
  );

  return (
    <div className="course-list justify-content-center">
      {filteredCourseEntries.map(([id, course]) => (
        <Course
          profile={profile}
          key={id}
          id={id}
          course={course}
          selected={selected}
          toggleSelected={toggleSelected}
        />
      ))}
    </div>
  );
};

export default CourseList;
