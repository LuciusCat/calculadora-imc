import React from "react";
import "../css/Menu.css";

const Menu = ({title, items}) => {
  return (
    <div className="container-menu">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}><a href={item.href}>{item.text}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default Menu;
