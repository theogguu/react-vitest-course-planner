const dayConflict = (days1, days2) =>
  days1 ? days1.split("").some((day) => days2.includes(day)) : false;
const timeConflict = (time1, time2) => {
  const [timeStart1, timeEnd1] = time1.split("-");
  const [timeStart2, timeEnd2] = time2.split("-");
  return timeStart1 < timeEnd2 && timeEnd1 > timeStart2;
};
const termConflict = (term1, term2) => term1 === term2;

// Given a list of courses and an individual course, see if there are
// any time conflicts AND if it already exists in the courselist
export const hasConflictWithCourseList = (CourseList, Course) =>
  CourseList.some((CourseListCourse) => {
    const [days1, time1] = CourseListCourse.meets
      ? CourseListCourse.meets.split(" ")
      : [null, null];
    const [days2, time2] = Course.meets.split(" ");
    return (
      dayConflict(days1, days2) &&
      timeConflict(time1, time2) &&
      termConflict(CourseListCourse.term, Course.term)
    );
  });

// Return courses that can be toggleable.
export const canToggleCourse = (CourseList, Course) =>
  CourseList.includes(Course) || !hasConflictWithCourseList(CourseList, Course);
