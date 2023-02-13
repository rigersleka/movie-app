import React from 'react';

const Footer = ({ copyright }) => {
  return (
    <div className="footer">
      <p>&copy; {copyright}</p>
    </div>
  );
};

export default Footer;
