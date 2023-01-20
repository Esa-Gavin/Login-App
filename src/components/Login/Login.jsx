import React, { useState } from 'react';

import classes from './Login.module.css';

const Login = (props) => {
    const [enteredEmail, setEnteredEmail]  = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    
    
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
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