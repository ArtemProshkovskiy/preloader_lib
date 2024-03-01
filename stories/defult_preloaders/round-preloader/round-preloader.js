import React from 'react';
import PropTypes from "prop-types";
<<<<<<< HEAD
import './round-preloader.css';

function RoundPreloader({ color, width, height, speed, border, visible, text, textColor, textStyle }) {
  const loaderClasses = `loader loader1 ${visible ? 'visible' : 'hidden'}`;

  const mergedStyles = {
    WebkitAnimation: `cssload-spin ${speed}ms infinite linear`,
    animation: `cssload-spin ${speed}ms infinite linear`,
    borderColor: `transparent ${color} ${color}`,
    width: `${width}px`,
    height: `${height}px`,
    borderWidth: `${border}px`
  };

  const textStyles = {
    color: textColor,
  };

  return (
 <div className="container">
      <div className="loaders">
        <div className={`loader ${loaderClasses}`}>
          <span style={mergedStyles}></span>
        </div>
      </div>
      <div className="text_round-preloader" style={textStyles}>
        {text}
      </div>
    </div>
  );
}

RoundPreloader.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  border: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

export default RoundPreloader;
=======
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
>>>>>>> c1f2c0047a80e197a3c13bdf4c4d18d4f80e8d47
