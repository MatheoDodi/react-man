import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import Features from './Features';

const Main = ({ thumbnail, name }) => {
  return (
    <MainSection>
      <Heading>
        Contrary to popular belief, he knows exactly what he’s doing.
      </Heading>
      <FeaturesWrapper>
        <div>
          <LazyLoad>
            <img src={thumbnail} alt={`${name} thumbnail`} />
          </LazyLoad>
        </div>
        <Features />
      </FeaturesWrapper>
    </MainSection>
  );
};

export default Main;

Main.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const MainSection = styled.main`
  padding: 3rem 5.5vw;
`;

const Heading = styled.h1`
  font-family: 'Ropa Sans', sans-serif;
  text-align: center;
  margin-bottom: 3.5rem;
`;

const FeaturesWrapper = styled.div`
  display: flex;
  align-items: center;
  > div {
    flex-basis: 30%;
    img {
      height: auto;
      /* max-height: 470px; */
      width: 100%;
    }
    @media screen and (max-width: 1000px) {
      margin-bottom: 5rem;
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
