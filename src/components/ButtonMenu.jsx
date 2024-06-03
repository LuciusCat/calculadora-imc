import React, { useState } from "react";
import "../css/ButtonMenu.css";

const ButtonMenu = ({ menuItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button className="button-menu" onClick={toggleMenu} />
      {menuOpen && (
        <div className="dropdown-menu">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ButtonMenu;
