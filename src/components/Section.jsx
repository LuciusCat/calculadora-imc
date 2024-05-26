import React from 'react';
import '../css/Section.css';

const Section = ({ title, titleLevel: TitleTag, children, className }) => {
    return (
      <div className= {className}>
        {title && <TitleTag className = "section-title"> {title}</ TitleTag>}
        <div className="section-content">
          {children}
        </div>
      </div>
    );
  };
  
  export default Section;