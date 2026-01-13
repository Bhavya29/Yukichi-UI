import React from 'react';
import './Checkbox.css';

/**
 * Checkbox component for Yukichi-UI
 * @param {string} label - Label text
 * @param {boolean} checked - Checked state
 * @param {function} onChange - Change handler
 */
const Checkbox = ({
    label,
    checked = false,
    onChange,
    disabled = false,
    className = '',
    ...props
}) => {
    return (
        <label className={`yu-checkbox ${disabled ? 'yu-checkbox--disabled' : ''} ${className}`}>
            <input
                type="checkbox"
                className="yu-checkbox__input"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                {...props}
            />
            <span className="yu-checkbox__checkmark">
                <svg
                    className="yu-checkbox__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </span>
            {label && <span className="yu-checkbox__label">{label}</span>}
        </label>
    );
};

export default Checkbox;
