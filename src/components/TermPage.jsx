import { useState } from "react";
import CourseList from "./CourseList/CourseList";

const terms = {
  Fall: "Fall",
  Winter: "Winter",
  Spring: "Spring",
};

const TermButton = ({ term, selection, setSelection }) => (
  <div>
    <input
      type="radio"
      id={term}
      className="btn-check"
      checked={term === selection}
      autoComplete="off"
      onChange={() => setSelection(term)}
    />
    <label 
      className="btn btn-outline-dark btn-lg m-1 p-2" 
      htmlFor={term}
      style={{width: "150px", textAlign: "center"}}
      >
      {term}
    </label>
  </div>
);

const TermSelector = ({ selection, setSelection }) => (
  <div className="d-flex btn-group justify-content-center align-items-center m-2">
    {Object.keys(terms).map((term) => (
      <TermButton
        key={term}
        term={term}
        selection={selection}
        setSelection={setSelection}
      />
    ))}
  </div>
);

const Term = ({ selection }) => <div className="card">{terms[selection]}</div>;

const TermPage = (courses) => {
  const [selection, setSelection] = useState(() => Object.keys(terms)[0]);

  return (
    <div>
      <TermSelector selection={selection} setSelection={setSelection} />
      <CourseList courses={courses} term={selection} />
    </div>
  );
};

export default TermPage;
