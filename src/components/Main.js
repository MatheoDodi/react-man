import React from 'react';
import styled from 'styled-components';
import Features from './Features';

const Main = ({ thumbnail }) => {
  return (
    <MainSection>
      <Heading>
        Contrary to popular belief, he knows exactly what he’s doing.
      </Heading>
      <FeaturesWrapper>
        <div>
          <img src={thumbnail} />
        </div>
        <Features />
      </FeaturesWrapper>
    </MainSection>
  );
};

export default Main;

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
