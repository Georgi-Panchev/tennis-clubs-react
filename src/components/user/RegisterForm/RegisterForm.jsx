import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function RegisterForm(props) {
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

            <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter confirm password"
                              name="confirmPassword" value={user.confirmPassword} onChange={handleChange} />
                {errors.passwords && <Alert variant="danger" className="p-2">{errors.passwords}</Alert>}
            </Form.Group>
            <Button variant="primary" type="submit">
                Register User
            </Button>
        </Form>
    );
}

export default RegisterForm;
