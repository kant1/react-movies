import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeroImage } from '../styles/StyledHeroImage';

const HeroImage = ({ image, title, text }) => (
  <StyledHeroImage image={image}>
    <div className="position">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  </StyledHeroImage>
)

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default HeroImage;