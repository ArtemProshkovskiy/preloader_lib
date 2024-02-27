import React from 'react';
import PropTypes from "prop-types";
import './round-preloader.css'

function RoundPreloader({color, width, height, speed, border}) {
    const mergedStyles = {
        WebkitAnimation: `cssload-spin ${speed}ms infinite linear`,
        animation: `cssload-spin ${speed}ms infinite linear`,
        borderColor: `transparent ${color} ${color}`,
        width: `${width}px`,
        height: `${height}px`,
        borderWidth: `${border}px`
    };

    return (
        <div className="loader loader1">
            <span style={mergedStyles}></span>
        </div>
    );
}


RoundPreloader.propTypes = {
    color: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    border: PropTypes.number.isRequired,
};
export default RoundPreloader;