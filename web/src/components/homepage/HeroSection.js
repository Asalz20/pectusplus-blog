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
            <h1 className="hero__heading">Explore Pectus Plus</h1>
            <ParagraphText className="hero__text">
              PectusPlus Blog is a site for all things Pectus Excavatum related.
              Blog posts will dive deep on the review of published medical
              journals, stretching/mobility work, weightlifting routines, and
              breathing techniques.
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Explore Blogs
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/woods.jpeg"
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
