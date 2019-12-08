import React from "react";
import styled from "styled-components";
import ironManMain from "../assets/img/ironman-main.png";

const Hero = () => (
  <HeroSection>
    <ImgContainer>
      <IMG src={ironManMain} />
    </ImgContainer>
    <Wrapper>
      <HeroText>
        Wounded, captured and forced to build a weapon by his enemies,
        billionaire industrialist Tony Stark instead created an advanced suit of
        armor to save his life and escape captivity. Now with a new outlook on
        life, Tony uses his money and intelligence to make the world a safer,
        better place as Iron Man.
      </HeroText>
      <CTAButton>Get Started</CTAButton>
    </Wrapper>
  </HeroSection>
);

export default Hero;

const HeroSection = styled.section`
  background: linear-gradient(145deg, #cc3332 50%, #ffcc33);
  width: 100%;
  height: 100vh;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 700px;
  max-width: 50%;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  color: #fff;
`;

const CTAButton = styled.button`
  background: #f4bc00;
  color: #fff;
  font-size: 1.2rem;
  padding: 15px 80px;
  border-radius: 5px;
  /* width: 30%; */
`;

const ImgContainer = styled.div`
  flex-basis: 35%;
`;

const IMG = styled.img`
  width: 80%;
`;
