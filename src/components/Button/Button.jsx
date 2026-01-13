import React from 'react';
import './Button.css';

/**
 * Button component for Yukichi-UI
 * @param {string} variant - 'primary', 'secondary', 'outline'
 * @param {string} size - 'sm', 'md', 'lg'
 */
const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseClass = 'yu-button';
    const variantClass = `yu-button--${variant}`;
    const sizeClass = `yu-button--${size}`;

    return (
        <button
            className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
