import React from "react";

import './Accordion.css'

const Accordion = ({name, text}) => {
  return (
    <details className="details">
      <summary className="details__title">{name}</summary>
      <div className="details__content">
        <p>
          {text}
        </p>
      </div>
    </details>
  );
};

export default Accordion;
