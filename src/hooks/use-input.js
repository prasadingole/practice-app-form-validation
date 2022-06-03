import { useReducer } from "react";

const initialInputState =   {
    value: '',
    isTouched : false
}

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched };
    } else if (action.type === 'BLUR') {
        return { ...state, isTouched: true };
    } else if (action.type === 'RESET') {
        return { value: '', isTouched: false };
    }
}

const useInput = (validateValue) => {
    const [inputState,dispatch] = useReducer(inputStateReducer,initialInputState);

    const enteredValueIsValid = validateValue(inputState.value);
    const enteredValueHasErrors =  !enteredValueIsValid && inputState.isTouched;

    const enteredValueHandler = (event) => {
        dispatch({type:'INPUT', value : event.target.value})
    }
    
    const valueInputBlurHandler = event => {
        dispatch({type:'BLUR'})
    }

    
    const reset = () => {
        console.log("reset");
        dispatch({type:'RESET'});
    }
    
    return {
        enteredValue : inputState.value, 
        enteredValueHasErrors, 
        enteredValueHandler ,
        valueInputBlurHandler,
        reset,
        enteredValueIsValid
    };
}

export default useInput;