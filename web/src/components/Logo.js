import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import LogoStyles from '../styles/LogoStyles';

function Logo() {
  return (
    <LogoStyles to="/">
      <StaticImage
        className="hero__image"
        src="../images/alex-logo.png"
        alt="Pectus plus logo"
        placeholder="blurred"
        objectPosition="50% 30%"
      />
    </LogoStyles>
  );
}

export default Logo;
