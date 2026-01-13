import React from 'react';
import './NavBar.css';
import Button from '../Button/Button';

/**
 * NavBar component for Yukichi-UI
 * @param {string} brandName - Name of the brand/logo
 * @param {Array} links - Array of objects { href: string, label: string }
 * @param {ReactNode} actions - Custom actions (e.g. Buttons)
 */
const NavBar = ({
    brandName = 'Yukichi UI',
    links = [],
    actions,
    className = '',
    ...props
}) => {
    return (
        <nav className={`yu-navbar ${className}`} {...props}>
            <a href="/" className="yu-navbar__brand">
                {brandName}
            </a>

            {links.length > 0 && (
                <ul className="yu-navbar__menu">
                    {links.map((link, index) => (
                        <li key={index} className="yu-navbar__item">
                            <a href={link.href} className="yu-navbar__link">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}

            {actions && (
                <div className="yu-navbar__actions">
                    {actions}
                </div>
            )}
        </nav>
    );
};

export default NavBar;
