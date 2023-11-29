import React from 'react';
import PropTypes from 'prop-types';
import './figmaButton.css';

export const figmaButton = ({ primary, label, ...props }) => {
    const mode = primary ? "figma-custom-button-1" : "figma-custom-button-2";

    return (
        <button
            type="button"
            className={[mode, 'font-inter'].join(' ')}>
            {label}
        </button>
    );
}

figmaButton.propTypes = {
    primary: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func
};

figmaButton.defaultProps = {
    primary: true,
    onClick: undefined
};