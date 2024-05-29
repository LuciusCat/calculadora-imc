import React from "react";
import "../css/IconSection.css";

const IconSection = ({
  className,
  idCard,
  idImg,
  title,
  titleLevel: TitleTag = "h2",
  children,
}) => {
  return (
    <div className={className} id={idCard}>
      <div className="img-div" id = {idImg}></div>
      {title && <TitleTag className="section-title-icon">{title}</TitleTag>}
      <div className="section-content-icon">{children}</div>
    </div>
  );
};

export default IconSection;
