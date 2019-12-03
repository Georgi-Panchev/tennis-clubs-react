import React from 'react';
import Input from '../../common/Input/Input';

function CreateTournamentForm(props) {
    const { tournament, errors, handleSubmit, handleChange } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Input name="title" placeholder="Title" value={tournament.title} error={errors.title} handleChange={handleChange} />
            <Input type="url" name="imageUrl" placeholder="Image Url"
                   value={tournament.imageUrl} error={errors.imageUrl} handleChange={handleChange} />
            <div>
                <label htmlFor="balls">Balls</label>
                <select name="balls" id="balls" value={tournament.balls} onChange={handleChange}>
                    <option value="">Choose</option>
                    <option value="Dunlop">Dunlop</option>
                    <option value="Wilson">Wilson</option>
                    <option value="Head">Head</option>
                </select>
            </div>
            <Input type="number" name="fee" placeholder="Fee"
                   value={tournament.fee} error={errors.fee} handleChange={handleChange} />
            <div>
                <input type="submit" value="Create Tournament" />
            </div>
        </form>
    );
}

export default CreateTournamentForm;

