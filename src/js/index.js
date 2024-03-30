import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


import "../styles/index.css";


function SimpleCounter(props) {
  return (
    <div className="counter">
      <div className="reloj">
        <i className="far fa-clock"></i>
      </div>
      <div className="cuatro">{props.digitFour}</div>
      <div className="tres">{props.digitThree}</div>
      <div className="dos">{props.digitTwo}</div>
      <div className="uno">{props.digitOne}</div>
    </div>
  );
}


SimpleCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};


function startCounter() {
  let counter = 0;
  setInterval(() => {
    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = Math.floor(counter / 1) % 10;

    ReactDOM.render(
      <SimpleCounter
        digitOne={one}
        digitTwo={two}
        digitThree={three}
        digitFour={four}
      />,
      document.querySelector("#app")
    );

    counter++;
  }, 1000);
}


startCounter();


