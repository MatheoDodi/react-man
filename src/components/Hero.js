import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import ironManMain from '../assets/img/iron-man.png';

const Hero = ({ description }) => (
  <Section>
    <ImgContainer>
      <IMG src={ironManMain} alt="Chibi Iron Man" />
    </ImgContainer>
    <Wrapper>
      <HeroText>{description} </HeroText>
      <CTAButton>Get Started</CTAButton>
    </Wrapper>
  </Section>
);

export default Hero;

Hero.propTypes = {
  description: PropTypes.string.isRequired
};

const Section = styled.section`
  padding: 0 5.5vw;
  background: linear-gradient(145deg, #cc3332 50%, #ffcc33);
  width: 100%;
  height: 100vh;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7px 25px;
    height: fit-content;
    padding-bottom: 18rem;
  }
`;

const Wrapper = styled.div`
  width: 700px;
  max-width: 50%;
  height: 38vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }
`;

const HeroText = styled.p`
  font-size: 1.45rem;
  color: #fff;
`;

const CTAButton = styled.button`
  margin-top: 1rem;
  background: #f4bc00;
  color: #fff;
  font-size: 1.45rem;
  padding: 20px 80px;
  width: 320px;
  border-radius: 5px;
  box-shadow: 3px 4px 9px rgba(360, 360, 360, 0.16);
  transition: all 0.5s ease;
  :hover {
    background: radial-gradient(#f4bc00 5%, #cc3332);
    cursor: pointer;
  }
`;

const ImgContainer = styled.div`
  flex-basis: 35%;
  margin-right: 2rem;
  @media screen and (max-width: 800px) {
    margin-top: 25vw;
  }
`;

const IMG = styled.img`
  width: 80%;
  @media screen and (max-width: 800px) {
    width: 50%;
    margin: 0 auto;
    display: block;
  }
`;
