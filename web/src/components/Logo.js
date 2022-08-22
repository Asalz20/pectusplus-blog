import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import LogoStyles from '../styles/LogoStyles';

function Logo() {
  return (
    <LogoStyles to="/">
      <StaticImage
        className="hero__image"
        src="../images/pectus-plus-logo.png"
        alt="press workout"
        placeholder="blurred"
        objectPosition="50% 30%"
      />
    </LogoStyles>
  );
}

export default Logo;
