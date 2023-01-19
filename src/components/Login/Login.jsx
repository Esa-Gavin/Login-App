import React, { useState } from 'react';

import classes from './Login.module.css';

const Login = (props) => {
    const [enteredEmail, setEnteredEmail]  = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                
            </form>

        </Card>
    )
};

export default Login;