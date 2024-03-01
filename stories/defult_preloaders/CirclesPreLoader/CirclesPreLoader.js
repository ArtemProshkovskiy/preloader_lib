import React from 'react';
import PropTypes from "prop-types";
import './CirclesPreLoader.css'

function CirclesPreLoader({ width, height, visible}) {
    const loaderClasses = `loader loader2 ${visible ? 'visible' : 'hidden'}`;

    const loaderStyles = {
        width: `${width}px`,
        height: `${height}px`,

    };

    return (
         <div className="container">
         <div className="wrapper">
            <div className="loader">
               <div className="dot"></div>
            </div>
            <div className="loader">
               <div className="dot"></div>
            </div>
            <div className="loader">
               <div className="dot"></div>
            </div>
            <div className="loader">
               <div className="dot"></div>
            </div>
            <div className="loader">
               <div className="dot"></div>
            </div>
            <div className="loader">
               <div className="dot"></div>
            </div>
         </div>
         <div className="text_CirclesPreLoader">
            Please wait
         </div>
      </div>
    );
}


CirclesPreLoader.propTypes = {
    color: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    border: PropTypes.number.isRequired,
    visible: PropTypes.bool.isRequired,
};
export default CirclesPreLoader;