import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [valueInputIsTouched, setValueInputIsTouched] = useState(false);

    const enteredValueIsValid = validateValue(enteredValue);
    const enteredValueHasErrors =  !enteredValueIsValid && valueInputIsTouched;

    const enteredValueHandler = (event) => {
        setEnteredValue(event.target.value);
    }
    
    const valueInputBlurHandler = event => {
        setValueInputIsTouched(true);
    }

    const reset = () => {
        console.log("reset")
        setEnteredValue('');
        setValueInputIsTouched(false);
    }
    
    return {
        enteredValue, 
        enteredValueHasErrors, 
        enteredValueHandler ,
        valueInputBlurHandler,
        reset,
        enteredValueIsValid
    };
}

export default useInput;