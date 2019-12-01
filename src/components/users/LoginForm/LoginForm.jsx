import React from 'react';
import Input from '../../common/Input/Input';

function LoginForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Input name="username" placeholder="Username" value={props.user.username}
                   error={props.errors.username} handleChange={props.handleChange} />
            <Input type="password" name="password" placeholder="Password" value={props.user.password}
                   error={props.errors.password} handleChange={props.handleChange} />
            <div>
                <input type="submit" value="Login User" />
            </div>
        </form>
    );
}

export default LoginForm;
