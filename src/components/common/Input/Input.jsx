import React from 'react';
import './Input.css';

function Input(props) {
    let type = props.type || 'text';

    let wrapperClass = null;
    if (props.error) {
        wrapperClass = 'error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={props.name}>{props.placeholder}</label>
            <input type={type} name={props.name} id={props.name} placeholder={props.placeholder}
                   value={props.value} onChange={props.handleChange} />
            <span>{props.error}</span>
        </div>
    );
}

export default Input;
