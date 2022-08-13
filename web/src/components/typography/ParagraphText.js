import React from 'react';
import { ParagraphTextStyles } from '../../styles/typography/ParagraphTextStyles';

function ParagraphText({ children, ...props }) {
  return <ParagraphText {...props}>{children}</ParagraphText>;
}

export default ParagraphTextStyles;
