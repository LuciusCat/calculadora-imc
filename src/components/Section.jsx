import React from 'react';
import '../css/Section.css';

const Section = ({ title, titleLevel: TitleTag, children, className, id }) => {
    return (
      <div className= {className} id ={id}>
        {title && <TitleTag className = "section-title"> {title}</ TitleTag>}
        <div className="section-content">
          {children}
        </div>
      </div>
    );
  };
  
  export default Section;