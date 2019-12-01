import React from 'react';
import Input from '../../common/Input/Input';

function CreateCommentForm(props) {
    const { comment, errors, handleSubmit, handleChange } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Input name="message" placeholder="Message" value={comment.message} error={errors.message} handleChange={handleChange} />
            <div>
                <input type="submit" value="Create Comment" />
            </div>
        </form>
    );
}

export default CreateCommentForm;
