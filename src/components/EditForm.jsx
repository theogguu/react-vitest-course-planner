import { useFormData } from "../utilities/useFormData";
import { useNavigate, NavLink } from "react-router-dom";
import { useDbUpdate } from "../utilities/firebase";

const validateUserData = (key, val) => {
    switch (key) {
      case 'title':
        return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
      case 'meets':
        return /^((M|T|W|Th|F)(|$))+ (\d{1,2}:\d{2})-(\d{1,2}:\d{2})$/.test(val) ? 
        '' : 'must contain valid days and starting time';
      default: return '';
    }
  };

const ButtonBar = ({message, disabled}) => {
    const navigate = useNavigate();
    return (
        <div className="d-flex">
        <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
        <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
        <span className="p-2">{message}</span>
        </div>
    );
};

const InputField = ({ name, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">
      {text}
    </label>
    <input
      className="form-control"
      id={name}
      name={name}
      defaultValue={state.values?.[name]}
      onChange={change}
    />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

// const activation = ({isActive}) => isActive ? 'active' : 'inactive';

// const Navigation = () => (
//   <nav>
//     <NavLink to="/" className={activation}>Posts</NavLink>
//     <NavLink to="/users" className={activation}>Users</NavLink>
//   </nav>
// );

const EditForm = (course) => {
  const [update, result] = useDbUpdate(`/courses/${course.id}`);
  const [state, change] = useFormData(validateUserData, course);
  const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      update(state.values);
    }
  };

  return (
    <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
      <InputField name="title" text="Course Name" state={state} change={change}/>
      <InputField name="meets" text="Meeting Times" state={state} change={change}/>
      <ButtonBar message={result?.message} />
    </form>
  )
};

export default EditForm;
