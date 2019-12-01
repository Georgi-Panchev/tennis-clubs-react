import React from 'react';
import Input from '../../common/Input/Input';

function CreateClubForm(props) {
    const { club, errors, handleSubmit, handleChange } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Input name="title" placeholder="Title" value={club.title} error={errors.title} handleChange={handleChange} />
            <Input type="url" name="imageUrl" placeholder="Image Url"
                   value={club.imageUrl} error={errors.imageUrl} handleChange={handleChange} />
            <div>
                <label htmlFor="city">City</label>
                <select name="city" id="city" value={club.city} onChange={handleChange}>
                    <option value="">Choose</option>
                    <option value="Sofia">Sofia</option>
                    <option value="Plovdiv">Plovdiv</option>
                    <option value="Varna">Varna</option>
                    <option value="Burgas">Burgas</option>
                </select>
            </div>
            <div>
                <label htmlFor="rank">Rank</label>
                <select name="rank" id="rank" value={club.rank} onChange={handleChange}>
                    <option value="">Choose</option>
                    <option value="Top">Top</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <Input type="number" name="courts" placeholder="Courts"
                   value={club.courts} error={errors.courts} handleChange={handleChange} />
            <Input type="checkbox" name="hasLighting" placeholder="Lighting"
                   value={club.hasLighting} error={errors.hasLighting} handleChange={handleChange} />
            <Input type="checkbox" name="hasIndoorCourts" placeholder="Indoor Courts"
                   value={club.hasIndoorCourts} error={errors.hasIndoorCourts} handleChange={handleChange} />
            <div>
                <input type="submit" value="Create Club" />
            </div>
        </form>
    );
}

export default CreateClubForm;
