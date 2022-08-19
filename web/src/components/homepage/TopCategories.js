import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';
import CategoryGrid from '../category/CategoryGrid';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          category {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
    }
  `);
  const categories = data.allSanityFeatured.nodes[0].category;

  return (
    <TopCategoriesStyles>
      <SectionTitle>Top Categories</SectionTitle>
      <ParagraphText className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur
        culpa quo magnam dignissimos omnis deserunt rerum! Nesciunt, quo.
        Perferendis?
      </ParagraphText>
      <CategoryGrid categories={categories} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
