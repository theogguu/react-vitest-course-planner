import { useFormData } from "../utilities/useFormData";
import { useNavigate, NavLink } from "react-router-dom";

const validateUserData = (key, val) => {
    switch (key) {
      case 'firstName': case 'lastName':
        return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
      case 'email':
        return /^\w+@\w+[.]\w+/.test(val) ? '' : 'must contain name@domain.top-level-domain';
      default: return '';
    }
  };

const ButtonBar = ({disabled}) => {
    const navigate = useNavigate();
    return (
        <div className="d-flex">
        <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
        <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
        {/* <span className="p-2">{message}</span> */}
        </div>
    );
};

const InputField = ({ name, text, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">
      {text}
    </label>
    <input
      className="form-control"
      id={name}
      name={name}
    //   defaultValue={state.values?.[name]}
      onChange={change}
    />
    {/* <div className="invalid-feedback">{state.errors?.[name]}</div> */}
  </div>
);

const activation = ({isActive}) => isActive ? 'active' : 'inactive';

// const Navigation = () => (
//   <nav>
//     <NavLink to="/" className={activation}>Posts</NavLink>
//     <NavLink to="/users" className={activation}>Users</NavLink>
//   </nav>
// );

const EditForm = (course) => {
//   const [update, result] = useDbUpdate(`/users/${user.id}`);
//   const [state, change] = useFormData(validateUserData, user);
  const submit = (evt) => {
    evt.preventDefault();
    // if (!state.errors) {
    //   update(state.values);
    // }
  };

  return (
    <div className="pr-5">
        <h2>{course.id.toUpperCase()}</h2>
        <form onSubmit={submit}>
            <InputField name="courseName" text="Course Name" />
            <InputField name="meetingTimes" text="Meeting Times" />
        </form>
        <ButtonBar />
    </div>
  )
};

export default EditForm;
