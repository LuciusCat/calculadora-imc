import React from "react";
import "../css/ListSection.css"

const ListSection = ({ id, title, intro, listItems, conclusion }) => {
  return(
      <div className="list-section" id={id}>
        <h2>{title}</h2>
        <p>{intro}</p>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{conclusion}</p>
      </div>
  );
};

export default ListSection;
