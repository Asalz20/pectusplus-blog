import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          We hope you found the information on Pectus Plus helpful and
          informative. Our mission is to provide accurate and reliable resources
          for individuals with Pectus Excavatum and their families. If you have
          any suggestions for topics you'd like us to cover or feedback on how
          we can improve, please don't hesitate to reach out. Thank you for
          visiting our site!
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          © PectusPlus-Blog {new Date().getFullYear()}. All rights reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
