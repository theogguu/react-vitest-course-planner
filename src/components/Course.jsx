const Course = ({course}) => (
    <div>
        <h4>
            {course.term} CS {course.number}: {course.title}
        </h4>
    </div>
)

export default Course;