import './TermPage.css'
import { useState } from "react";
import Modal from "../Modal/Modal";
import Cart from "../Cart/Cart";
import CourseList from "../CourseList/CourseList";
import { canToggleCourse } from "../../utilities/isConflict";

const terms = {
  Fall: "Fall",
  Winter: "Winter",
  Spring: "Spring",
};

const TermButton = ({ term, termSelection, setTermSelection }) => (
  <div className="TermButton">
    <input
      type="radio"
      id={term}
      className="btn-check"
      checked={term === termSelection}
      autoComplete="off"
      onChange={() => setTermSelection(term)}
    />
    <label
      className="btn btn-outline-dark btn-lg m-1 p-2"
      htmlFor={term}
      style={{ width: "150px", textAlign: "center" }}
      data-cy={term}
    >
      {term}
    </label>
  </div>
);

const TermSelector = ({ termSelection, setTermSelection }) => (
  <div className="d-flex btn-group justify-content-center align-items-center m-2">
    {Object.keys(terms).map((term) => (
      <TermButton
        key={term}
        term={term}
        termSelection={termSelection}
        setTermSelection={setTermSelection}
      />
    ))}
  </div>
);

// const Term = ({ termSelection }) => (
//   <div className="card">{terms[termSelection]}</div>
// );

const TermPage = ({profile, courses}) => {
  const [term, setTerm] = useState(() => Object.keys(terms)[0]);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const [courseSelection, setCourseSelection] = useState([]);

  const toggleCourseSelected = (course) => {
    if (canToggleCourse(courseSelection, course)) {
      setCourseSelection(
        courseSelection.includes(course)
          ? courseSelection.filter((x) => x !== course)
          : [...courseSelection, course]
      );
    }
  };
  {console.log(profile)}
  if (!profile) {
    return <div>Loading...</div>; // or handle the absence of profile in an appropriate way
  }

  return (
    <div>
      <button className="btn btn-outline-dark" onClick={openModal}>
        <i className="bi bi-cart4">📚View Selected Courses</i>
      </button>
      <Modal open={open} close={closeModal}>
        <Cart selected={courseSelection} />
      </Modal>

      <TermSelector termSelection={term} setTermSelection={setTerm} />

      <CourseList
        profile={profile}
        courses={courses}
        term={term}
        selected={courseSelection}
        toggleSelected={toggleCourseSelected}
      />
    </div>
  );
};

export default TermPage;
