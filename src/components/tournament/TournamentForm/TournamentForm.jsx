import React from 'react';
import { Alert, Button, Form, InputGroup } from 'react-bootstrap';

function TournamentForm(props) {
    const { tournament, errors, handleSubmit, handleChange, buttonText } = props;

    return (
        <Form noValidate className="mb-5" onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" placeholder="Enter title"
                              name="title" value={tournament.title} onChange={handleChange} />
                {errors.title && <Alert variant="danger" className="p-2">{errors.title}</Alert>}
            </Form.Group>

            <Form.Group controlId="formImageUrl">
                <Form.Label>Image Url:</Form.Label>
                <Form.Control type="url" placeholder="Enter image url"
                              name="imageUrl" value={tournament.imageUrl} onChange={handleChange} />
                {errors.imageUrl && <Alert variant="danger" className="p-2">{errors.imageUrl}</Alert>}
            </Form.Group>

            <Form.Group controlId="formBalls">
                <Form.Label>Balls:</Form.Label>
                <Form.Control as="select" name="balls" value={tournament.balls} onChange={handleChange}>
                    <option value="" disabled>Choose</option>
                    <option value="Dunlop">Dunlop</option>
                    <option value="Wilson">Wilson</option>
                    <option value="Head">Head</option>
                </Form.Control>
                {errors.balls && <Alert variant="danger" className="p-2">{errors.balls}</Alert>}
            </Form.Group>

            <Form.Group controlId="formFee">
                <Form.Label>Fee:</Form.Label>
                <InputGroup>
                    <Form.Control type="number" placeholder="Enter fee" aria-label="Fee" aria-describedby="basic-fee"
                                  name="fee" value={tournament.fee} onChange={handleChange} />
                    <InputGroup.Append>
                        <InputGroup.Text id="basic-fee">lv</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
                {errors.fee && <Alert variant="danger" className="p-2">{errors.fee}</Alert>}
            </Form.Group>

            <Button variant="primary" type="submit">
                {buttonText}
            </Button>
        </Form>
    );
}

export default TournamentForm;
