import React from 'react';
import './RadioButton.css';

/**
 * RadioButton component for Yukichi-UI
 * @param {string} label - Label text
 * @param {boolean} checked - Checked state
 * @param {function} onChange - Change handler
 * @param {string} name - Group name
 */
const RadioButton = ({
    label,
    checked = false,
    onChange,
    name,
    disabled = false,
    className = '',
    ...props
}) => {
    return (
        <label className={`yu-radio ${disabled ? 'yu-radio--disabled' : ''} ${className}`}>
            <input
                type="radio"
                className="yu-radio__input"
                checked={checked}
                onChange={onChange}
                name={name}
                disabled={disabled}
                {...props}
            />
            <span className="yu-radio__circle">
                <span className="yu-radio__dot"></span>
            </span>
            {label && <span className="yu-radio__label">{label}</span>}
        </label>
    );
};

export default RadioButton;
