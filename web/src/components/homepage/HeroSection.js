import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import Button from '../buttons/Button';
import ParagraphText from '../typography/ParagraphText';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Explore Pectus Excavatum</h1>
            <ParagraphText className="hero__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              perspiciatis, voluptatum autem vel quas nesciunt earum aspernatur.
              Dolorum, modi ipsam?
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Explore Blogs
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/press.jpeg"
              alt="press workout"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
