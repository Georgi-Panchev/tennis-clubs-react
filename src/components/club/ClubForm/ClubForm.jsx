import React from 'react';
import { Alert, Button, Form, Row, Col } from 'react-bootstrap';

function ClubForm(props) {
    const { club, errors, handleSubmit, handleChange, buttonText } = props;

    return (
        <Form noValidate className="mb-5" onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formTitle">
                <Form.Label column sm="3">Title:</Form.Label>
                <Col sm="9">
                    <Form.Control type="text" placeholder="Enter title"
                                  name="title" value={club.title} onChange={handleChange} />
                    {errors.title && <Alert variant="danger" className="p-2">{errors.title}</Alert>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formImageUrl">
                <Form.Label column sm="3">Image Url:</Form.Label>
                <Col sm="9">
                    <Form.Control type="url" placeholder="Enter image url"
                                  name="imageUrl" value={club.imageUrl} onChange={handleChange} />
                    {errors.imageUrl && <Alert variant="danger" className="p-2">{errors.imageUrl}</Alert>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formCity">
                <Form.Label column sm="3">City:</Form.Label>
                <Col sm="9">
                    <Form.Control as="select" name="city" value={club.city} onChange={handleChange}>
                        <option value="" disabled>Choose</option>
                        <option value="Sofia">Sofia</option>
                        <option value="Plovdiv">Plovdiv</option>
                        <option value="Varna">Varna</option>
                        <option value="Burgas">Burgas</option>
                    </Form.Control>
                    {errors.city && <Alert variant="danger" className="p-2">{errors.city}</Alert>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formRank">
                <Form.Label column sm="3">Rank:</Form.Label>
                <Col sm="9">
                    <Form.Control as="select" name="rank" value={club.rank} onChange={handleChange}>
                        <option value="" disabled>Choose</option>
                        <option value="Top">Top</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </Form.Control>
                    {errors.rank && <Alert variant="danger" className="p-2">{errors.rank}</Alert>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formCourts">
                <Form.Label column sm="3">Courts:</Form.Label>
                <Col sm="9">
                    <Form.Control type="number" placeholder="Enter courts"
                                  name="courts" value={club.courts} onChange={handleChange} />
                    {errors.courts && <Alert variant="danger" className="p-2 ">{errors.courts}</Alert>}
                </Col>
            </Form.Group>

            <Form.Check type="switch" id="lighting-switch" label="Lighting" className="mt-3 mb-3"
                        name="hasLighting" checked={club.hasLighting}
                        value={club.hasLighting} onChange={handleChange} />

            <Form.Check type="switch" id="indoor-courts-switch" label="Indoor Courts" className="mt-3 mb-3"
                        name="hasIndoorCourts" checked={club.hasIndoorCourts}
                        value={club.hasIndoorCourts} onChange={handleChange} />

            <Button variant="primary" type="submit">
                {buttonText}
            </Button>
        </Form>
    );
}

export default ClubForm;
