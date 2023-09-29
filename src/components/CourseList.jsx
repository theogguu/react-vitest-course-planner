import Course from './Course'

const CourseList = ({courses}) => (
    <div>
        { Object.values(courses).map((
            (value) => <Course course={value}/>
            ))
        }
    </div>
)
    
export default CourseList;
