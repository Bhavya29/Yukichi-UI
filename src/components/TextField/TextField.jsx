import React from 'react';
import './TextField.css';

/**
 * TextField component for Yukichi-UI
 * @param {string} label - Input label
 * @param {string} placeholder - Input placeholder
 * @param {string} value - Input value
 * @param {function} onChange - Change handler
 * @param {string} error - Error message
 * @param {string} type - Input type (text, password, etc.)
 */
const TextField = ({
    label,
    placeholder,
    value,
    onChange,
    error,
    type = 'text',
    disabled = false,
    className = '',
    ...props
}) => {
    return (
        <div className={`yu-textfield ${error ? 'yu-textfield--error' : ''} ${className}`}>
            {label && <label className="yu-textfield__label">{label}</label>}
            <div className="yu-textfield__wrapper">
                <input
                    type={type}
                    className="yu-textfield__input"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    {...props}
                />
            </div>
            {error && <span className="yu-textfield__error-message">{error}</span>}
        </div>
    );
};

export default TextField;
