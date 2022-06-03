
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const { enteredValue: enteredName, enteredValueHasErrors: nameInputHasErrors,
    enteredValueHandler: nameInputChangeHandler, valueInputBlurHandler: nameInputBlurHandler,
    reset: resetName,
    enteredValueIsValid : isEnteredNameValid }
    = useInput(value => 
      value !== undefined && value.trim() !== '' );
  
  const { enteredValue: enteredEmail, enteredValueHasErrors: emailInputHasErrors,
    enteredValueHandler: emailInputChangeHandler, valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
    enteredValueIsValid : isEnteredEmailValid }
    = useInput(value => value !== undefined && value.trim().includes("@"));
 
  const isFormValid = isEnteredNameValid && isEnteredEmailValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if(!isFormValid){
      console.log('invalid form');
      return;
    }
    resetName();
    resetEmail()
  };

  const enteredNameInputClass = nameInputHasErrors  ?  'form-control invalid' : 'form-control' ;
  const enteredEmailInputClass = emailInputHasErrors  ?  'form-control invalid' : 'form-control' ;
 
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={enteredNameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler}  value={enteredName}   />
        {nameInputHasErrors && <p className='error-text'>Name can not be empty</p>}
       </div>
       <div className={enteredEmailInputClass}> 
        <label htmlFor='email' >Your Email</label>
        <input type='email' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail}/>
        {emailInputHasErrors && <p className='error-text'>Please enter valid email</p>}
        </div>
      <div className="form-actions">
        <button >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
