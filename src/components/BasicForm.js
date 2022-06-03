import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  
  const {
    enteredValue: firstName,
    enteredValueHasErrors: firstNameHasErrors,
    enteredValueHandler: firstNameChangeHandler,
    valueInputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
    enteredValueIsValid: firstNameIsValid
  } = useInput(value =>
    value !== undefined && value.trim() !== '');

  const {
    enteredValue: lastName,
    enteredValueHasErrors: lastNameHasErrors,
    enteredValueHandler: lastNameChangeHandler,
    valueInputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
    enteredValueIsValid: lastNameIsValid
  } = useInput(value =>
    value !== undefined && value.trim() !== '');

  const {
    enteredValue: email,
    enteredValueHasErrors: emailHasErrors,
    enteredValueHandler: emailChangeHandler,
    valueInputBlurHandler: emailBlurHandler,
    reset: emailReset,
    enteredValueIsValid: emailIsValid
  } = useInput(value => value !== undefined && value.trim().includes("@"));

  const isFormValid = firstNameIsValid && lastNameIsValid && emailIsValid;
  const formSubmissionHandler = event => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    alert(firstName + " " +lastName + " "+email);
    firstNameReset();
    lastNameReset();
    emailReset();
  }

  const getInputClass = (inputValueHasError) => {
    return inputValueHasError ? 'form-control invalid' : 'form-control';
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={getInputClass(firstNameHasErrors)}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstName} />
          {firstNameHasErrors && <p className='error-text'>Please enter valid first name</p>}
        </div>
        <div className={getInputClass(lastNameHasErrors)}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastName} />
          {lastNameHasErrors && <p className='error-text'>Please enter valid last name</p>}
        </div>
      </div>
      <div className={getInputClass(emailHasErrors)}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={email} />
        {emailHasErrors && <p className='error-text'>Please enter valid email</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
