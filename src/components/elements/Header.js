import React from 'react';
import { Link } from '@reach/router';

import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo
} from '../styles/StyledHeader';

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
    </Link>
    <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
  </StyledHeader>
)

export default Header;