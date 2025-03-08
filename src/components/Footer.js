import React from 'react';

const Footer = ({ textRefs }) => (
  <footer className="footer">
    <p className="footer-text" ref={(el) => (textRefs.current[8] = el)}>
      © 2025 $GRIT Token. All rights reserved.
    </p>
  </footer>
);

export default Footer;