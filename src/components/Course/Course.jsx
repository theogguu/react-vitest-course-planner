import './Course.css'

const Course = ({ course, id, selected, toggleSelected }) => (
  <div className="course card m-1 p-2" onClick = {() => toggleSelected(id)}>
    <div className={`card-body ${selected.includes(id) ? 'selected' : ''}`}>
        <h4 className="card-title">
          {course.term} CS {course.number}
        </h4>
        {course.title}
    
    </div>
    <div className="card-footer">{course.meets}</div>
  </div>
);

export default Course;
