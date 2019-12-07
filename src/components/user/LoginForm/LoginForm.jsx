import React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

function LoginForm(props) {
    const { user, errors, handleSubmit, handleChange } = props;

    return (
        <Form noValidate className="mb-5" onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder="Enter username"
                              name="username" value={user.username} onChange={handleChange} />
                {errors.username && <Alert variant="danger" className="p-2">{errors.username}</Alert>}
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter password"
                              name="password" value={user.password} onChange={handleChange} />
                {errors.password && <Alert variant="danger" className="p-2">{errors.password}</Alert>}
            </Form.Group>
            <Button variant="primary" type="submit">
                Login User
            </Button>
        </Form>
    );
}

export default LoginForm;

