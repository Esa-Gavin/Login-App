import React, { useState } from 'react';

import classes from './Login.module.css';

const Login = (props) => {
    const [enteredEmail, setEnteredEmail]  = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');


    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);

        setFormIsValid(event.target.value.includes('@') && )
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className=''>

                </div>
            </form>

        </Card>
    )
};

export default Login;